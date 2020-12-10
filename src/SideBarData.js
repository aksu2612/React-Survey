import React from 'react'

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
export const SideBarData=[
    {
        title:'Ana Sayfa',
        path:'./Home',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Anket',
        path:'./Anket',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Yarışma',
        path:'./Yarisma',
        icon: <FaIcons.Fa500Px/>,
        cName:'nav-text'
    }
]