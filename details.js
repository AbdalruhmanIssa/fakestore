const getProduct = async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  console.log(window.location);
  return data;
};
const dispro = async () => {
  const data = await getProduct();
  const result = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>
   <img src='${data.image}'/ width=20%> `;
  document.querySelector(".product").innerHTML = result;
  console.log(data);
};
dispro();
