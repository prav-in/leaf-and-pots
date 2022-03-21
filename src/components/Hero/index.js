import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from "./HeroElements";

const Hero = () => {
  // state stuff
  const [isOpen, setIsOpen] = useState(false);

  // functions
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <HeroContainer>
      <Navbar handleToggle={handleToggle} />
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Be More Renewable</HeroH1>
          <HeroP>More Than 2000 Species</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
