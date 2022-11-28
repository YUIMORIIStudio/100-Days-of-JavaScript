const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("SUBMITTED!");

  //extract the input to save in a variable
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };

  //call axios
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);

  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
