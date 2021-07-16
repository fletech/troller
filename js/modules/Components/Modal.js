export const Modal = (article) => {
  return `
        <div class="modal-card">
            <div class="modal-header">

                <div class="modal-image">
                    <img src="${article.media}" />
                </div>

                <div class="modal-title">
                    <h2>${article.title}</h2>
                </div>

            </div>

            <div class="info-container">

                <div class="info-details">
                    <p>
                      <span>${article.clean_url}</span>
                    </p>
                    <p>
                      <span> 
                        <small>
                          ${article.published_date}
                        </small>
                      </span>
                    </p>
                </div>

                <div class="modal-content">
                    <p class="modal-description">${article.summary}</p>
                </div>
                
            </div>

            <div class="modal-close-container">
                
                    <i class="far fa-times-circle"></i>

            </div>

      </div>`;
};
