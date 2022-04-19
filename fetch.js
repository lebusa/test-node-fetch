// test the experimental fetch API

fetch("http://localhost:3000/api")
  .then((res) => res.json())
  .then((data) => console.log("data fetched ok"))
  .catch((err) => console.error("error fetching data"));
