const API_KEY = "ca28fa1f33mshf43f0697b2b1d0dp1bde54jsn783b759ef4fc";
const NEWS_API_KEY = "2919bdc1948a459c9b99296ef5c965d8";

const containerCards = document.querySelector(".container-cards");

export const fetchToApi = async (setCardNew) => {
  try {
    const response = await fetch(
      "https://free-news.p.rapidapi.com/v1/search?q=si&country=ar&lang=es&search_in=summary&page_size=100",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "free-news.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();

    containerCards.innerHTML = "";
    setCardNew(data.articles);
    //console.log(data.articles);
    //
  } catch (error) {
    console.error("Error:", error);
  }
};

// export const fetchToApi = async (
//   country,
//   category,
//   containerCards,
//   setCardNew
// ) => {
//   try {
//     // let array = ["ar", "us", "de", "ch", "mx"];
//     // let position = Math.floor(Math.random() * 10);
//     // let country =
//     //   position > array.length
//     //     ? array[Math.floor(position / 2)]
//     //     : array[position];
//     // console.log(position);

//     const response = await fetch(
//       `https://newsapi.org/v2/top-headlines?category=${
//         category !== undefined ? category : "general"
//       }&country=${
//         country !== undefined ? country : "ar"
//       }&apiKey=${NEWS_API_KEY}`
//     );

//     const data = await response.json();
//     console.log(data);
//     let dataModified = [];

//     data.articles.forEach((article, i) => {
//       article = {
//         ...article,
//         id: i + 1,
//         titleShort: `${article.title.substr(0, article.title.indexOf("-", 0))}`,
//         contentFake:
//           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum culpa tenetur omnis eveniet soluta blanditiis iste laboriosam quo necessitatibus a sint impedit sapiente modi, mollitia quidem dolores assumenda. Consequatur doloremque enim, dolores libero blanditiis iste? Asperiores iste deleniti quasi, unde sequi aliquam reprehenderit ea aperiam minus, temporibus ipsa consectetur aspernatur perspiciatis libero ex laboriosam nesciunt ut distinctio, blanditiis saepe id. At placeat perspiciatis, minus optio, cum aperiam, eveniet vero cumque animi mollitia provident voluptatum expedita architecto. Beatae, saepe accusantium excepturi dicta veniam velit recusandae sit sapiente illo ex numquam. Voluptatem, qui libero voluptatibus repellat enim aspernatur eos et accusantium quidem delectus illo? Doloremque accusamus officiis expedita autem nemo aspernatur praesentium rerum earum eaque, minus totam quas adipisci non vel cumque ut reiciendis vitae. Consectetur labore itaque culpa ducimus minima, eos et ad, incidunt unde consequuntur laboriosam nobis accusantium quibusdam! Atque dignissimos culpa ab iusto vero assumenda nostrum possimus veniam a. Exercitationem amet delectus molestias odio quasi nulla nihil expedita voluptates! Ducimus animi quaerat impedit dolor voluptate voluptates quibusdam sed veritatis. Repellendus alias asperiores dignissimos magni dolores deleniti repudiandae maxime voluptatibus quibusdam facilis? Totam corrupti, nemo omnis magni adipisci, facere, quas quaerat sapiente perferendis est illo pariatur quis tempore nisi voluptatum?",
//       };
//       dataModified.push(article);
//     });

//     containerCards.innerHTML = "";
//     setCardNew(dataModified);
//     console.log("fetched");
//     //
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
