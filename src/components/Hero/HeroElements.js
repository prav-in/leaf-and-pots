import styled from "styled-components";
import plantBg from "../../images/plantBg.jpg";

export const HeroContainer = styled.div`
  background: url(${plantBg});
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const HeroContent = styled.div`
  height: calc(100vh-70px);
  max-height: 100%;
  width: 100vw;
  padding: 0 calc(100vw-1300px) / 2;
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: white;

  font-weight: bold;
  line-height: 1;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  padding: 2rem 2rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: #bfd8bd;
  color: #2c6e49;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.2vw, 3rem);
  margin-bottom: 2.5rem;
  color: #a44a3f;
  margin-left: 10px;
`;

export const HeroBtn = styled.button`
  font-size: 1.5rem;
  padding: 1rem 4rem;
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
