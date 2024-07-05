import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.soldOut && <span className="sold-out">SOLD OUT</span>}
        <div className="hover-icons">
          <a href="#"><i className="fas fa-search"></i></a>
          <a href="#"><i className="fas fa-heart"></i></a>
          <a href="#"><i className="fas fa-shopping-cart"></i></a>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <div className="product-rating">
          <span>{product.rating}</span>
          <span>{product.reviews} reviews</span>
        </div>
        <div className="product-price">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
