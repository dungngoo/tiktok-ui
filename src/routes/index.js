import routesConfig from "~/config/routes";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import { HeaderOnly } from "~/components/Layout";
import Search from "~/pages/Search";
import Profile from "~/pages/Profile";

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.search, component: Search, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
