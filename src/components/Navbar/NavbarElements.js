import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiPlantFill } from "react-icons/ri";

export const Nav = styled.nav`
  background: rgba(87, 204, 153, 0.6);
  height: 70px;

  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    right: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  color: white;
`;

export const Bars = styled(RiPlantFill)`
  font-size: 2.5rem;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #004b23;
    transition: 0.3s ease-in-out;
  }
`;
