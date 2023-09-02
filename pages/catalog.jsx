import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react"; //
import DataService from "../services/dataService";
//this hook help to do something when the component is loaded
//this is similar to init

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const [prodsToDisplay, setProdsToDisplay] = useState([]);

  async function loadCatalog() {
    let service = new DataService();
    let prods = await service.getProducts();
    console.log(prods);
    setProducts(prods);
    //here on the load of the page I want to
    //create the cartegories
    let cats = ["shoes", "pants", "shirts", "accessories"];
    setCategory(cats);
    setProdsToDisplay(prods);
  }
  useEffect(function () {
    // exec something when the component is loaded
    console.log("the component is loaded");
    loadCatalog();
  }, []);
  function filter(caty) {
    console.log(caty);

    let list = [];
    //find the products that match the category
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === caty) {
        list.push(prod);
      }
    }
    console.log(list);
    setProdsToDisplay(list);
  }

  function clearFilter() {
    setProdsToDisplay(products);
  }

  return (
    <div className="catalog">
      <h1>Check out our {products.length} amazing products in our catalog</h1>
      <br />
      <button onClick={clearFilter} className=" btn btn-sm btn-dark btn-filter">
        All
      </button>
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => filter(c)}
          className="btn btn-sm btn btn-primary btn-filter"
        >
          {" "}
          {c}{" "}
        </button>
      ))}
      ;
      <br />
      {prodsToDisplay.map((p) => (
        <Product key={p.id} data={p}></Product>
      ))}
    </div>
  );
}

export default Catalog;
