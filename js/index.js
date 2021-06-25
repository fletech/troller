window.addEventListener("load", () => {
  const API_KEY = "2919bdc1948a459c9b99296ef5c965d8";
  const containerCards = document.querySelector(".container-cards");

  //Functions

  const setCardNew = (article) => {
    if (article.description === null) return null;
    if (article.urlToImage === null) return null;

    let title = `${article.title.substr(0, article.title.indexOf("-", 0))}`;
    return (containerCards.innerHTML += `
                  <article class="new-card">

                      <div class="image-container">
                        <img src="${article.urlToImage}"/>
                      </div>
                      <div class="info-container">
                        <h2>${title}</h2>
                        <i>
                        <span>${article.source.name}</span>
                        </i>
                      </div>
                      <div class="call-to-action">
                        <button>Ver más</button>
                      </div>

                  </article>`);
  };

  const fetchToApi = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=ar&apiKey=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      data.articles.forEach((article) => setCardNew(article));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  fetchToApi();
});
