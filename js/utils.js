export const getDate = (date) => {
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

export const Modal = (article) => {
  return `
        <div class="modal-card">
            <div class="modal-header">

                <div class="modal-image">
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

                <div class="modal-content">
                    <p class="modal-description">${article.contentFake}</p>
                </div>
                
            </div>

            <span class="modal-close"><i class="fas fa-times-circle"></i></span>

      </div>`;
};

// export const CardNew = (article) => {
//   return `      <article class="new-card">

//                       <div class="image-container">
//                           <img src="${article.urlToImage}"/>
//                           <span class="info-source">
//                               ${article.source.name}
//                           </span>

//                       </div>

//                       <div class="info-container">
//                           <h2>${
//                             article.titleShort.length > 80
//                               ? article.titleShort.substr(0, 80) + "..."
//                               : article.titleShort
//                           }</h2>

//                       </div>

//                       <div class="call-to-action">
//                           <button class="button-more" data-id="${article.id}">
//                             Ver más
//                           </button>
//                       </div>

//                   </article>`;
// };

export const CardNew = (article) => {
  return `      <article class="new-card">

                      <div class="image-container">
                          <img src="${article.media}"/>
                          <span class="info-source">

                          </span>

                      </div>

                      <div class="info-container">
                          <h2>${article.title}</h2>
                          
                      </div>

                      <div class="call-to-action">
                          <button class="button-more" data-id="${article.id}">
                            Ver más
                          </button>
                      </div>

                  </article>`;
};

export const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
  let timeout;

  const runInterval = () => {
    const timeoutFunction = () => {
      intervalFunction();
      runInterval();
    };

    const delay =
      Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    timeout = setTimeout(timeoutFunction, delay);
  };

  runInterval();

  return {
    clear() {
      clearTimeout(timeout);
    },
  };
};
