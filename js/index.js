import { Modal, getDate, CardNew, setRandomInterval } from "./modules/utils.js";
import { createNewPixel } from "./modules/newPixel.js";

import { fetchToApi } from "./modules/fetchToApi.js";
import { noise } from "./modules/noise.js";

let minutesToGetNewData = 30;
let minSecondsDelayToNewPixel = 0.1;
let maxSecondsDelayToNewPixel = 0.5;

window.addEventListener("load", () => {
  const body = document.querySelector("body");
  const containerCards = document.querySelector(".container-cards");
  const modalBG = document.querySelector(".modal-bg");

  // STATES //
  let modalState = false;
  const setModalState = (boolean) => {
    modalState = boolean;
  };

  // LISTENERS //

  /// Close with escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalBG.classList.remove("turned-on");
      setModalState(false);
      fetchToApi(containerCards, setCardNew);
      noise(modalState);
    } else {
      null;
    }
  });

  /// Close clicking at X
  const turnOffModalButton = (button, modal) => {
    button.addEventListener("click", () => {
      fetchToApi(containerCards, setCardNew);
      modal.classList.remove("turned-on");
      setModalState(false);
    });
  };

  body.addEventListener("scroll", () => {
    secondsToCreateNewPixel = 0.01;
  });
  // FUNCTIONS //

  ////////////////////////////////////
  //  TURN DATA FETCHED INTO CARDS  //
  ////////////////////////////////////
  const setCardNew = (data) => {
    data.forEach((article) => {
      if (article.description === null) return null;
      if (article.urlToImage === null) return null;
      if (article.media === null) {
        console.log(article.media);
        return null;
      }

      containerCards.innerHTML += CardNew(article);

      const buttonMore = document.querySelectorAll(".button-more");

      buttonMore.forEach((button) => {
        button.addEventListener("click", (e) => {
          let id = e.target.dataset.id;
          turnOnModal(modalBG, id, data);
          modalBG.classList.add("turned-on");
        });
      });
    });
  };

  /////////////////////////
  //  Create MODAL VIEW  //
  /////////////////////////

  const turnOnModal = (modal, id, data) => {
    data.filter((article) => {
      article._id == id ? (modal.innerHTML = Modal(article, getDate)) : null;
    });

    const buttonClose = document.querySelector(".modal-close");
    const modalCard = document.querySelector(".modal-card");
    turnOffModalButton(buttonClose, modalBG);
    setModalState(true);
    setTimeout(() => {
      noise(modalState, modalCard);
    }, 2000);
  };

  ////////////////
  //Interactions//
  ////////////////
  setTimeout(() => {
    setRandomInterval(
      () => createNewPixel(body),
      minSecondsDelayToNewPixel * 1000,
      maxSecondsDelayToNewPixel * 1000
    );
  }, 5000);

  /////////////////
  // CALL TO API //
  /////////////////
  fetchToApi(containerCards, setCardNew);
  setInterval((state = modalState) => {
    !state ? fetchToApi(containerCards, setCardNew) : null;
  }, minutesToGetNewData * 1000 * 60);
});
