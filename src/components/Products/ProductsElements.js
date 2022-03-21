import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc(100vw-1300px) / 2;
  background: #bfd8bd;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem 1rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  border-radius: 6px;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 3rem;
  font-weight: 700;
`;

export const ProductTitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  font-family: "Roboto Condensed";
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: 2px solid #2c6e49;
  background: transparent;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background: #2c6e49;
    color: white;
  }
`;
