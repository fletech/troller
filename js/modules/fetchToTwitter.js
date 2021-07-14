const TOKEN =
  "AAAAAAAAAAAAAAAAAAAAAGNwRgEAAAAAHJmtYNqwzMck%2BYzyxmRwxg2QE0c%3DltDSzxO0KnSEfppUH959BrtN4UvEoQKDHuxd7iv5xPqx03vQPw";

// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
//   Authorization: TOKEN,
// };

export const fetchToTwitter = async (query) => {
  var requestOptions = {
    method: "GET",
    redirect: "manual",
  };

  fetch(
    `https://api.twitter.com/2/tweets/search/recent?query=${query}&tweet.fields=author_id,created_at,entities,geo,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  //   try {
  //     const response = await fetch(
  //       `https://api.twitter.com/2/tweets/search/recent?query=${query}&tweet.fields=author_id,created_at,entities,geo,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source`,
  //       requestOptions
  //     );
  //     const data = await response.text();
  //     console.log(data);
  //     //
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
};
