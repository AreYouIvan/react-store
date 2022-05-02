import React from 'react';
import './ShoppingCartItem.scss'



const ShoppingCartItem = () => {
  return (
      <section className="product-detail">
        <div className="title-container">
          <img src="./icons/flechita.svg" alt="arrow" />
          <p className="title">My order</p>
        </div>

        <div className="my-order-content">
          <div className="shopping-cart">
            <figure>
              <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="bike"
              />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./icons/icon_close.png" alt="close" />
          </div>

          <div className="shopping-cart">
            <figure>
              <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="bike"
              />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./icons/icon_close.png" alt="close" />
          </div>

          <div className="shopping-cart">
            <figure>
              <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="bike"
              />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./icons/icon_close.png" alt="close" />
          </div>

          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>$560.00</p>
          </div>

          <button className="primary-button">Checkout</button>
        </div>
      </section>
  );
};

export { ShoppingCartItem };