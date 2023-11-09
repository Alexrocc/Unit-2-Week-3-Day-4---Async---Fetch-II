const APILoad1 = () => {
  fetch("https://api.pexels.com/v1/curated", {
    headers: {
      Authorization: "lmhyVR3MJlD3HsOnnsBrCwV6JbwLKr9SNcNIA4oz3s7TpHJDeA8cdiwk",
    },
  })
    .then((response) => {
      if (response) {
        return response.json();
      }
    })
    .then((imgObj) => {
      console.log(imgObj);
      const cards = Array.from(document.getElementsByClassName("card"));
      const svg = document.getElementsByClassName("bd-placeholder-img");
      console.log(cards);
      for (let i = 0; i < cards.length; i++) {}
    })
    .catch((error) => console.log(error));
};
window.onload = () => {
  const loadBtn = document.querySelector(".btn-primary");
  loadBtn.addEventListener("click", APILoad1);
};
