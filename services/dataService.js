import axios from "axios";

let catalog = [
  {
    title: "Pedro sneakers",
    category: "shoes",
    price: 845.99,
    image: "red bottoms.jpg",
    id: "1",
  },
  {
    title: "F.A.V sneakers",
    category: "shoes",
    price: 1045.99,
    image: "red bottoms 2.jpg",
    id: "2",
  },
  {
    title: "Gray Air Jardon 17",
    category: "shoes",
    price: 2500.99,
    image: "gray jardon 17.jpg",
    id: "3",
  },
  {
    title: "Brown Pants",
    category: "pants",
    price: 39.99,
    image: "brown pants.webp",
    id: "4",
  },
  {
    title: "Levi Jeans",
    category: "pants",
    price: 48.99,
    image: "levijeans.jpeg",
    id: "5",
  },
  {
    title: "True Religion Pants",
    category: "pants",
    price: 150.99,
    image: "thskinny.jpeg",
    id: "6",
  },
  {
    title: "Versace Shirt",
    category: "shirts",
    price: 250.99,
    image: "versace_drshirt_178_a.jpg",
    id: "7",
  },
  {
    title: "Versace Yellow Shirt",
    category: "shirts",
    price: 600.99,
    image: "versace yellow.webp",
    id: "8",
  },
  {
    title: "Gucci Shield Sun glasses",
    category: "accessories",
    price: 1100.99,
    image: "gucci glasses.avif",
    id: "9",
  },
  {
    title: "Ray Bans",
    category: "accessories",
    price: 200.99,
    image: "bruno mars raybans.jpg",
    id: "10",
  },
];
//a component its only a fancy name that react gives to functions

class DataService {
  serverURL = "http://127.0.0.1:5000";

  async getProducts() {
    // uncomment next line to work with local data
    // return catalog;

    // call the server
    const response = await axios.get("http://127.0.0.1:5000/api/products");
    return response.data;
  }

  async saveProduct(prod) {
    const response = await axios.post(this.serverURL + "/api/products", prod);
    return response.data;
  }

  async saveCoupon(coupon) {
    const response = await axios.post(this.serverURL + "/api/coupons", coupon);
    return response.data;
  }

  async deleteProduct(id) {
    const response = await axios.delete(
      this.serverURL + "/api/products/id/" + id
    );
    return response.data;
  }
}

export default DataService;
