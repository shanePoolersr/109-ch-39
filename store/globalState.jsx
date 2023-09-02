import{useState} from 'react';
import DataContext from './dataContext';

function GlobalState(props) {
    const [cart,setCart] =useState([]);
    const[user, setUser] =useState({name: 'Shane', id:1777, email:'shanepoolersr@gmail.com'});

    function addToCart(prod) {
        console.log('global add');
        // add prod to cart
        // create a copy, modify and send the copy back
        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }

    function removeFromCart() {
        console.log('global remove');
    }

    return (
        <DataContext.Provider
        value={{
            cart: cart,
            user:user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
        }}
        >
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalState;
