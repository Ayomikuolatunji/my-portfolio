import {BiGitBranch} from "react-icons/bi"
import {FcContacts} from "react-icons/fc"
import {FaBlogger} from "react-icons/fa"
import { FaHome } from "react-icons/fa"



export  const navItems=[
    {
      id:Math.random(),
      path:'/',
      icon:<FaHome className="text-4xl text-red-400"/>,
      item:"Home"
    },{
      id:Math.random(),
      path:"/blog",
      icon:<FaBlogger/>,
      item:"Blog"
    },{
      id:Math.random(),
      path:"/projects",
      icon:<img src="/assests/icons8-project-64.png" 
      className="w-10 h-7"/>,
      item:"Projects"
    },{
      id:Math.random(),
      path:"/github",
      icon:<BiGitBranch/>,
      item:"Github"
    },{
      id:Math.random(),
      path:"#contact",
      icon:<FcContacts/>,
      item:"Contact Me"
    }
  ]