import styled from "styled-components";
import { BOX_BACKGROUND, LIGHT_GRAY, WHITE } from "utils/colorConsts";

const Drawer = styled.div`
  position: absolute;
  background: ${BOX_BACKGROUND};
  min-height: 80vh;
  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 70px;
  z-index: 0;
  left: 0;
  width: 25%;
  border-right: 1px solid ${LIGHT_GRAY};
`;

const DrawerItem = styled.div`
  padding: 0 20px;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background: ${BOX_BACKGROUND};
  cursor: pointer;
  transition: 300ms;
  :hover {
    transform: translateX(10px);
    background: ${WHITE};
  }
`;

const ProfilePic = styled.img`
  height: 70px;
  border-radius: 50%;
`;
const DrawerItemContent = styled.div`
  margin-left: 15px;
`;

export default { ProfilePic, DrawerItemContent, DrawerItem, Drawer };
