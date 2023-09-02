import './productInCart.css';

function ProductInCart(props) {
    return (
        <div className="product-cart">
            <h5>{props.data.title}</h5>
            <label></label>
        </div>
    );
}

export default ProductInCart;