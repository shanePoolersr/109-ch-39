import { useState, useEffect } from "react";
import "./admin.css";
import DataService from "../services/dataService";

function Admin() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
  });
  const [allProducts, setAllProducts] = useState([]);
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  useEffect(function () {
    loadData();
  }, []);

  async function loadData() {
    let service = new DataService();
    const prods = await service.getProducts();
    setAllProducts(prods);
  }
  function handleCouponChange(e) {
    let copy = { ...coupon };
    copy[e.target.name] = e.target.value;
    setCoupon(copy);
  }

  function handleInputChange(e) {
    //create a copy, modify the copy,  set the copy back
    const name = e.target.name;
    const val = e.target.value;

    let copy = product;
    copy[name] = val;
    setProduct(copy);
    console.log(copy);
  }

  function saveProduct() {
    console.log(product);

    // save to server
    let copy = { ...product };
    copy.price = parseFloat(copy.price);
    let service = new DataService();
    service.saveProduct(copy);

    clearForm();
  }

  function saveCoupon() {
    // save to server
    let copy = { ...coupon };
    copy.discount = parseFloat(copy.discount);
    let service = new DataService();
    let res = service.saveCoupon(coupon);

    let couponsList = [...allCoupons];
    couponsList.push(res);
    setAllCoupons(couponsList);
  }

  function clearForm() {
    setProduct({ title: "", category: "", image: "", price: "" });
  }

  function removeProduct(id) {
    // remove from server
    let service = new DataService();
    service.deleteProduct(id);

    // remove from state var
    // allProducts is an array with products
    // remove from it the one with _id = id
    let copy = allProducts.filter((prod) => prod._id !== id);
    setAllProducts(copy);
  }

  return (
    <div className="admin pag">
      <h1>Store Management</h1>
      <div className="d-flex justify-content-center gap-5">
        <div className="parent-container col-4 border border-5 rounded-3 p-2">
          <h3>Register products</h3>

          <div>
            <label className="form-label">Title</label>
            <input
              onChange={handleInputChange}
              name="title"
              type="text"
              className="form-control"
            />
          </div>

          <div>
            <label className="form-label">Category</label>
            <input
              onChange={handleInputChange}
              name="category"
              type="text"
              className="form-control"
            />
          </div>

          <div>
            <label className="form-label">Image</label>
            <input
              onChange={handleInputChange}
              name="image"
              type="text"
              className="form-control"
            />
          </div>

          <div>
            <label className="form-label">Price</label>
            <input
              onChange={handleInputChange}
              name="price"
              type="Number"
              className="form-control"
            />
          </div>

          <div>
            <button onClick={saveProduct} className="btn btn-dark">
              Save Product
            </button>
          </div>

          <hr />

          <ul className="product-list">
            {allProducts.map((prod) => (
              <li key={prod._id}>
                {prod.title} ${prod.price}{" "}
                <button
                  onClick={() => removeProduct(prod._id)}
                  className="btn btn-sm btn-danger"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="coupon-form col-2 align-self-center border border-5 rounded-3 p-2">
          <h3>Add a Coupon</h3>
          <div>
            <label className="form-label">Code</label>
            <input
              onChange={handleCouponChange}
              name="code"
              type="text"
              className="form-control"
            />
          </div>

          <div>
            <label className="form-label">Discount</label>
            <input
              onChange={handleCouponChange}
              name="discount"
              type="text"
              className="form-control"
            />
          </div>

          <div className="mt-2">
            <button onClick={saveCoupon} className="btn-btn-dark">
              Save Coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;

// have to fix
