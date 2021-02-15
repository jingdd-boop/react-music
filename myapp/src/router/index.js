import LJDiscover from "@/pages/discover"
import LJFriend from "@/pages/friend"
import LJMine from "@/pages/mine"

const routes = [
  {
    path:"/",
    exact:true,
    component:LJDiscover
  },
  {
    path:"/mine",
    exact:true,
    component:LJMine
  },
  {
    path:"/friend",
    exact:true,
    component:LJFriend
  }
  
];

export default routes;