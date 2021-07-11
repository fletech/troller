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

export const Card = (article) => {
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
                          <button class="button-more" data-id="${article._id}">
                            Ver más
                          </button>
                      </div>

                  </article>`;
};
