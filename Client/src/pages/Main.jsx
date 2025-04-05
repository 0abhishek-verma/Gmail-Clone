import { useState } from "react";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Email from "../components/Email"

const Main=()=>{
    const [openDrawer,setOpenDrawer]=useState(true);

    const toggleDrawer =()=>{
        setOpenDrawer(prevState => !prevState);
    }
    return(
        <div>
            <Header toggleDrawer={toggleDrawer} />
            < SideBar openDrawer ={openDrawer}/>
            <Email openDrawer={openDrawer}/>
        </div>
    )
}

export default Main;