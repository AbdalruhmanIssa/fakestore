const getProducts = async () => {
  const { data } = await axios.get(`https://fakestoreapi.com/products`);
  return data;
};
const displayProducts = async () => {
  const data = await getProducts();
  const products = data;
  const result = products
    .map((product) => {
      return `
        <div class='product'>
          <h2>${product.title}</h2>
          <img src='${product.image}' />
          <a href='details.html?id=${product.id}'>details</a>
        </div>
      `;
    })
    .join(" ");
  document.querySelector(".products").innerHTML = result;
};
displayProducts();
