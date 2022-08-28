import Chat from "pages/Chat";
import JobPost from "pages/JobPost";
import MyContracts from "pages/MyContracts";
import Profile from "pages/Profile";
import Proposals from "pages/Proposals";
import SearchWork from "pages/SearchWork";
import Settings from "pages/Settings/Settings";
import Welcome from "pages/Welcome";
import { RoutesType } from "routes/publicRoutes";
import {
  SEARCH_WORK_ROUTE,
  PROPOSALS_ROUTE,
  CHAT_ROUTE,
  MY_CONTRACTS_ROUTE,
  PROFILE_ROUTE,
  SETTINGS_ROUTE,
  SETTINGS_CONTACT_INFO_ROUTE,
  WELCOME_ROUTE,
  JOB_POST_ROUTE,
} from "utils/routeConsts";

const protectedRoutes: RoutesType[] = [
  {
    path: SEARCH_WORK_ROUTE,
    component: SearchWork,
  },
  {
    path: PROPOSALS_ROUTE,
    component: Proposals,
  },
  {
    path: MY_CONTRACTS_ROUTE,
    component: MyContracts,
  },
  {
    path: CHAT_ROUTE,
    component: Chat,
  },
  {
    path: SETTINGS_ROUTE,
    component: Settings,
  },
  {
    path: SETTINGS_CONTACT_INFO_ROUTE,
    component: Settings,
  },
  {
    path: PROFILE_ROUTE,
    component: Profile,
  },
  {
    path: WELCOME_ROUTE,
    component: Welcome,
  },
  {
    path: JOB_POST_ROUTE,
    component: JobPost,
  },
];

export default protectedRoutes;
