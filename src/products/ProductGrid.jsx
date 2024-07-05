import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';


const products = [
    {
      id: 1,
      name: 'Wake Things UP',
      category: 'Healthy, Make Up',
      rating: '★★★★☆',
      reviews: 1,
      price: 190.99,
      image: 'https://vt-oliva.myshopify.com/cdn/shop/files/09.jpg?v=1713890885&width=360',
      soldOut: true,
    },
    {
      id: 2,
      name: 'Total Softie Gel Moisturizer',
      category: 'Healthy, Make Up',
      rating: '☆☆☆☆☆',
      reviews: 0,
      price: 190.99,
      image: 'https://vt-oliva.myshopify.com/cdn/shop/files/11.jpg?v=1713890880&width=360',
    },
    {
        id: 3,
        name: 'Wake Things UP',
        category: 'Healthy, Make Up',
        rating: '★★★★☆',
        reviews: 1,
        price: 190.99,
        image: 'https://vt-oliva.myshopify.com/cdn/shop/files/12.jpg?v=1713890885&width=360',
        soldOut: true,
      },
      {
        id: 4,
        name: 'Total Softie Gel Moisturizer',
        category: 'Healthy, Make Up',
        rating: '☆☆☆☆☆',
        reviews: 0,
        price: 190.99,
        image: 'https://vt-oliva.myshopify.com/cdn/shop/files/08.jpg?v=1713890885&width=360',
      },
      {
          id: 5,
          name: 'Wake Things UP',
          category: 'Healthy, Make Up',
          rating: '★★★★☆',
          reviews: 1,
          price: 190.99,
          image: 'https://vt-oliva.myshopify.com/cdn/shop/files/07.jpg?v=1713890885&width=360',
          soldOut: true,
        },
       
  ];

  
const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
