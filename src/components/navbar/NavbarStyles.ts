import { Header } from "antd/lib/layout/layout";
import styled from "styled-components";
import { BOX_BACKGROUND } from "utils/colorConsts";

const NavbarStyles = styled(Header)`
  background-color: white;
  display: flex;
  column-gap: 24px;
  box-shadow: 0 0 0.2em ${BOX_BACKGROUND};
  margin-bottom: 5px;
  padding-inline: 15%;
  align-items: center;
  z-index: 1;
`;

export const NavBarButtons = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
  margin-left: auto;
`;

export default NavbarStyles;
