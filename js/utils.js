const modal = (article) => {
  return `<div class="modal-card">
            <div class="modal-header">
            
                <div class="image-container">
                    <img src="${article.urlToImage}" />
                </div>

                <div class="modal-title">
                    <h2>${article.title}</h2>
                </div>

            </div>
            

            <div class="info-container">
                <i>
                  <span></span>
                </i>
            </div>
      </div>`;
};

export default modal;
