import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import { HeaderOnly } from "~/components/Layout";
import Search from "~/pages/Search";
import Profile from "~/pages/Profile";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/@:nickname", component: Profile },
  { path: "/search", component: Search, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
