import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #260701;
  color: white;
  height: 150px;
  width: 100vw;
`;

export const SocialMedia = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.7rem 2rem;
`;

export const SocialLogo = styled.h1`
  font-size: 2rem;
  font-size: 700;
  margin: 1rem auto;
  text-align: center;
`;

export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export const SocialIconLink = styled.div`
  margin: 0.8rem 2rem;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #9ef01a;
  }
`;
