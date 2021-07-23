import { Card } from "./modules/Components/Card.js";
import { Modal } from "./modules/Components/Modal.js";

import { fetchToApi } from "./modules/fetchToApi.js";
import { fetchToTwitter } from "./modules/fetchToTwitter.js";
import { fetchYouTube } from "./modules/fetchYouTube.js";
import { getDate, setRandomInterval } from "./modules/utils.js";
import { interaction_noise } from "./modules/interaction_noise.js";
import { interaction_pixel } from "./modules/interaction_pixel.js";
import { interaction_youtube } from "./modules/interaction_youtube.js";

// in minutes
let minutesToGetNewData = 30;
//in seconds
let delayTriggerPixels = 5;
let minSecondsDelayToNewPixel = 0.1;
let maxSecondsDelayToNewPixel = 1;
let delayTriggerInteraction = 2;

window.addEventListener("load", () => {
  ////////////  ELEMENTS  ////////////
  const body = document.querySelector("body");
  const modalBG = document.querySelector(".modal-bg");
  //-------------------------------------------
  //--------------------------------------------------------

  ///////////   LISTENERS   //////////
  // Close with escape //
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalBG.classList.remove("turned-on");
      setModalState(false);
      fetchToApi(setCardNew);
      interaction_youtube(modalState);
      //interaction_noise(modalState, null);
    } else {
      null;
    }
  });
  //-------------------------------------------
  // Close clicking at X //
  const turnOffModalButton = (button, modal) => {
    button.addEventListener("click", () => {
      fetchToApi(setCardNew);
      modal.classList.remove("turned-on");
      setModalState(false);
      interaction_youtube(modalState);
    });
  };
  //-------------------------------------------

  /// SCROLL !
  body.addEventListener("scroll", () => {
    console.log("scrolled!");
  });
  //-------------------------------------------
  //--------------------------------------------------------

  /////////////  STATES  /////////////
  let modalState = false;
  const setModalState = (boolean) => {
    modalState = boolean;
  };
  //-------------------------------------------
  //--------------------------------------------------------

  ///////////   FUNCTIONS   //////////

  //  TURN DATA FETCHED INTO CARDS  //
  const setCardNew = (data) => {
    data.forEach((article) => {
      if (article.description === null) return null;
      if (article.urlToImage === null) return null;
      if (article.media === null) {
        console.log(article.media);
        return null;
      }
      const containerCards = document.querySelector(".container-cards");
      containerCards.innerHTML += Card(article);
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
  //-------------------------------------------

  //  MODAL VIEW  //
  const turnOnModal = (modal, id, data) => {
    let title;
    data.filter((article) => {
      if (article._id == id) {
        modal.innerHTML = Modal(article, getDate);
        title = article.title;
      }
    });

    const buttonClose = document.querySelector(".modal-close-container");
    const modalCard = document.querySelector(".modal-card");
    turnOffModalButton(buttonClose, modalBG);
    setModalState(true);

    let interactionTrigger = Math.floor(Math.random() * 10);
    let youTubeResults;
    if (interactionTrigger % 2 === 0) {
      fetchYouTube(title).then((items) => (youTubeResults = items));
    }
    setTimeout(() => {
      switch (interactionTrigger % 2) {
        case 0:
          interaction_youtube(modalState, youTubeResults);
          break;
        case 1:
          //interaction_youtube(modalState, youTubeResults);
          interaction_noise(modalState, modalCard);
          break;
        default:
          console.log("ni 2 ni 3");
          break;
      }
      //interaction_youtube(modalState, youTubeResults);
      //interaction_noise(modalState, modalCard);
    }, delayTriggerInteraction * 1000);
  };
  //-------------------------------------------
  //--------------------------------------------------------

  //  INTERACTION PIXELS  //

  setTimeout(() => {
    setRandomInterval(
      () => interaction_pixel(),
      minSecondsDelayToNewPixel * 1000,
      maxSecondsDelayToNewPixel * 1000
    );
  }, delayTriggerPixels * 1000);
  //-------------------------------------------
  //--------------------------------------------------------

  /////////////  CALL TO API  /////////////

  //fetchToTwitter("messi");

  fetchToApi(setCardNew);

  setInterval((state = modalState) => {
    !state ? fetchToApi(setCardNew) : null;
  }, minutesToGetNewData * 1000 * 60);
  //-------------------------------------------
  //--------------------------------------------------------
});
