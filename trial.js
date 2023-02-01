// Testing

const url = "https://api.database.com/words?sl=";
const inputField = document.getElementById("myInput");

const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endPoint = `${url}${wordQuery}`;

  fetch(endPoint, { cache: "no-cache" }).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed");
    },
    (networkError) => {
      console.log(networkError.message);
    }
  );
};
