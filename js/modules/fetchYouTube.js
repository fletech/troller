const API_KEY = "AIzaSyC8Roc-poIQHsOyt-U-QZXjrExKX9atdp0";
const API_KEY_2 = "AIzaSyBm3xSOUaTg5BnlSqknYXTXqSSxUFUJF5A";
const API_KEY_3 = "AIzaSyA9y5SqdKUKUQC04iiw5W4-Dn3r0KEaEKU";

export const fetchYouTube = async (query) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?regionCode=AR&maxResults=10&video-embeddable=true&q=${query}&key=${API_KEY_3}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);

    return data.items;
  } catch (error) {
    console.error("Error:", error);
  }
};
