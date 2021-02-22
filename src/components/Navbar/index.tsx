import React from "react";
import { Container, Logo, Menu, MenuItem } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>PlanBee</Logo>
      <Menu>
        <MenuItem>About</MenuItem>
        <MenuItem>Content</MenuItem>
      </Menu>
    </Container>
  );
};

export default Navbar;
