import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  SocialIcon,
  SocialIconLink,
  SocialLogo,
  SocialMedia,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialLogo to="/">Go Green</SocialLogo>
        <SocialIcon>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
        </SocialIcon>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
