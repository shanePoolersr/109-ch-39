import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useContext, useEffect, useState } from "react";
import DataContext from "../store/dataContext";
//create a hook that shows up when the page is
//loaded
function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(DataContext).addToCart;

  useEffect(function () {
    //when the [product] is loaded
    console.log("hello im a product");
  }, []);

  function onQuantityChange(qty) {
    console.log("new value:" + qty);
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  function addProduct() {
    console.log("Adding " + quantity + " " + props.data.title);

    // console.log(`Adding ${quantity} ${props.data.title}`);
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>${props.data.price}</label>
        <label>Total ${getTotal()}</label>
      </div>

      <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
      <button onClick={addProduct} className="btn btn-sm btn-outline-primary">
        Add
      </button>
    </div>
  );
}
export default Product;
