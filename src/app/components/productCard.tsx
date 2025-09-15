import React from 'react';
import Image from 'next/image';
import { Product } from '../types/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <span className="product-card__category">{product.category}</span>
        <Image src={product.image} alt={product.name} width={400} height={300} className="product-card__image" />
      </div>
      <div className="product-card__details">
        <h3>{product.name} <span className="product-card__price">{product.price}</span></h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;