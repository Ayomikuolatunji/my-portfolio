import {BiGitBranch} from "react-icons/bi"
import {FcContacts} from "react-icons/fc"
import {FaBlogger} from "react-icons/fa"
import { FaHome } from "react-icons/fa"



export  const navItems=[
    {
      id:Math.random(),
      path:'/',
      icon:<FaHome className="text-2xl inline ml-2"/>,
      item:"Home"
    },{
      id:Math.random(),
      path:"/blog",
      icon:<FaBlogger className="text-3xl inline ml-2"/>,
      item:"Blog"
    },{
      id:Math.random(),
      path:"/projects",
      icon:<img src="/assests/icons8-project-64.png" 
      className="w-8 h-5 inline" />,
      item:"Projects"
    },{
      id:Math.random(),
      path:"/experience",
      icon:<img src="/assests/success.png" 
      className="w-8 h-5 inline" />,
      item:"Experience"
    },{
      id:Math.random(),
      path:"/github",
      icon:<BiGitBranch className="text-3xl inline ml-2"/>,
      item:"Github"
    },{
      id:Math.random(),
      path:"#contact",
      icon:<FcContacts className="text-3xl inline ml-2"/>,
      item:"Contact Me"
    }
  ]