import { Modal, getDate, CardNew, setRandomInterval } from "./utils.js";
import { createNewPixel } from "./newPixel.js";

import { fetchToApi } from "./fetchToApi.js";

let minutesToGetNewData = 30;
let minSecondsDelayToNewPixel = 0.1;
let maxSecondsDelayToNewPixel = 1.5;

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
    e.key === "Escape" && modalBG.classList.remove("turned-on");
    fetchToApi(containerCards, setCardNew);
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
      if (article.media === null) return null;

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
      article.id == id ? (modal.innerHTML = Modal(article, getDate)) : null;
    });

    const buttonClose = document.querySelector(".modal-close");
    turnOffModalButton(buttonClose, modalBG);
    setModalState(true);
    console.log(modalState);
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
