window.addEventListener("load", () => {
  const API_KEY = "2919bdc1948a459c9b99296ef5c965d8";
  const containerCards = document.querySelector(".container-cards");
  const modalBG = document.querySelector(".modal-bg");

  /////////Functions

  ///
  const fetchToApi = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=general&country=ar&apiKey=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);

      let dataModified = [];

      data.articles.forEach((article, i) => {
        article = {
          ...article,
          id: i + 1,
          title: `${article.title.substr(0, article.title.indexOf("-", 0))}`,
        };
        dataModified.push(article);
      });
      setCardNew(dataModified);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  fetchToApi();

  ///
  const setCardNew = (data) => {
    data.forEach((article) => {
      if (article.description === null) return null;
      if (article.urlToImage === null) return null;

      containerCards.innerHTML += `
                  <article class="new-card">

                      <div class="image-container">
                          <img src="${article.urlToImage}"/>
                      </div>

                      <div class="info-container">
                          <h2>${article.title}</h2>
                          <i>
                              <span>${article.source.name}</span>
                          </i>
                      </div>

                      <div class="call-to-action">
                          <button class="button-more" data-id="${article.id}">
                            Ver más
                          </button>
                      </div>

                  </article>`;

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

  const turnOnModal = (modal, id, data) => {
    data.filter((article) =>
      article.id == id
        ? (modal.innerHTML = `
        <div class="modal-card">
            <div class="modal-header">

                <div class="image-modal">
                    <img src="${article.urlToImage}" />
                </div>

                <div class="modal-title">
                    <h2>${article.title}</h2>
                </div>

            </div>

            <div class="info-container">

                <div class="info-details">
                    <p>
                      <span>${article.source.name}</span>
                    </p>
                    <p>
                      <span>${getDate(article.publishedAt)[0]} 
                        <small>
                          ${getDate(article.publishedAt)[1]}
                        </small>
                      </span>
                    </p>
                </div>

                <div>
                  <i>
                    <span>${article.description}</span>
                  </i>
                </div>
                
            </div>

            <span class="modal-close"><i class="fas fa-times-circle"></i></span>

      </div>`)
        : null
    );
    const buttonClose = document.querySelector(".modal-close");
    turnOffModalButton(buttonClose, modalBG);
  };

  const turnOffModalButton = (button, modal) => {
    button.addEventListener("click", () => {
      modal.classList.remove("turned-on");
    });
  };

  const getDate = (date) => {
    let dateTime = new Date(date);

    const getCurrentMonth = () => {
      const month = dateTime.getMonth() + 1;
      if (month < 10) {
        return `0${month}`;
      } else {
        return month;
      }
    };

    const getCurrentDay = () => {
      const day = dateTime.getDate();
      if (day < 10) {
        return `0${day}`;
      } else {
        return day;
      }
    };

    const formatTime = (cb) => {
      let time = cb;
      let time_format = time < 10 ? `0${time}` : time;
      return time_format;
    };

    let date_formatted =
      dateTime.getFullYear() +
      "-" +
      getCurrentMonth() +
      "-" +
      getCurrentDay() +
      " ";
    let time_formatted =
      formatTime(dateTime.getHours()) +
      ":" +
      formatTime(dateTime.getMinutes()) +
      ":" +
      formatTime(dateTime.getSeconds());

    return [date_formatted, time_formatted];
  };

  /////// LISTENERS ///////
  document.addEventListener("keydown", (e) => {
    e.key === "Escape" && modalBG.classList.remove("turned-on");
  });
});
