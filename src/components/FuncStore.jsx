import React, {useState} from 'react'
import './FuncStore.css'


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function FuncStore() {
    
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

    const itemsPrice= cart.reduce((a,c) => a + c.cost * c.id, 0);
    const taxPrice= itemsPrice * 0.05;
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    console.log(totalPrice)


    
    


    const [products] = useState ([
        {
            id: 1,
            name: 'East End Shirt',
            cost: 20.00,
            image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT3WgneOfqvKseZi5Yp9CecmzQlwLuIrTLE8KX__bxZhwpn5Wnlnzy-XyOm11UDbQvTb3oFpgk&usqp=CAc'
        },
        {
            id: 1,
            name: 'Satellite Beanie',
            cost: 25.00,
            image: 'data:image/jpeg;base64,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'

        },

        {
            id: 1,
            name: 'Satellite Pullover',
            cost: 40.00,
            image: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:1400/output=quality:90/compress/rXPNSvS7Sx6IvR9MSv2P'
        },

        {
            id: 1,
            name: 'Satellite Tee',
            cost: 20.00,
            image: 'data:image/jpeg;base64,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'
        },






    ]);


    const addToCart = (product) => {
        setCart([...cart, {...product}]);
    };

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !== productToRemove))
    }

    const navigateTo = (nextPage) => {
       setPage(nextPage);
    };

    const renderProducts = () => (
      <>
        <h1>Merch</h1>
        <div className="products">
          {products.map((product, idx) => (
            <li className="storecards__item" key={idx}>
              <div className="storecard">
                <img src={product.image} className="storecard__image" />
                <div className="card__content">
                  <div className="card__title">{product.name}</div>
                  <h3 className="title">${product.cost}</h3>
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </div>
      </>
    );


    const renderCart = () => (
        <>
        <h1>Cart</h1>
        <div className="products">
          {cart.map((product, idx) => (
            <li className="storecards__item" key={idx}>
              <div className="storecard">
                <img src={product.image} className="storecard__image" />
                <div className="card__content">
                  <div className="card__title">{product.name}</div>
                  <h3 className="title">${product.cost}</h3>
                  <button onClick={() => removeFromCart(product)}>
                    Remove From Cart
                  </button>
                </div>
                
              </div>
              </li>
            
          ))}
        </div>
        <div className='cartsummary'>
        <h4>Subtotal: ${itemsPrice}</h4>
        <h4>Tax: ${taxPrice}</h4>
        <h4>Shipping: ${shippingPrice}</h4>
        <h3>Total Price: ${totalPrice} </h3>
        <button className='checkoutbtn'>Checkout</button>

    </div>
      </>
    );
    

return (
      <>
     <header className='gotocart'>
        <button className='gtcbutton' onClick={() => navigateTo(PAGE_CART)}>Go To Cart ({cart.length})</button>
        <button className='gtcbutton' onClick={() => navigateTo(PAGE_PRODUCTS)}>View Merch </button>
    </header>
    {page === PAGE_PRODUCTS && renderProducts()}
    {page === PAGE_CART && renderCart()}
   
    </>
  )
}

export default FuncStore