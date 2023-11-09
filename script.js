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
    for (let i = 0; i < cards.length; i++) {
      //   const img = document.createElement("img");
      //   img.classList.add("card-img-top", "w-100", "object-fit-cover");
      svg[i].xmlns = imgObj.photos[i].src.original;

      //   svg[i].remove();
      //   cards[i].appendChild(img);
    }
  });
window.onload = () => {};
