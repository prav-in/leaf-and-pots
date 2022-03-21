import React from "react";
import {
  ProductButton,
  ProductCard,
  ProductDesc,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductsContainer,
  ProductsHeading,
  ProductTitle,
  ProductWrapper,
} from "./ProductsElements";

const Products = ({ data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>Best Sellers</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => (
          <ProductCard key={index}>
            <ProductImg src={product.img} alt={product.alt} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductButton>{product.button}</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
