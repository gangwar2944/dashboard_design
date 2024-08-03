"use client";
import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import LeftDrawer from "./LeftDrawer";
import SideBar from "./SideBar";
import Mainlayout from "./Mainlayout";
import { drawerWidth } from "../../services/general/constants";

interface DashboardContainerProps {
  children: JSX.Element | ReactNode;
}

function DashboardContainer({
  children,
}: DashboardContainerProps): JSX.Element {
  const [remainingDrawerWidth,setRemainingDrawerWidth] = useState(drawerWidth);

  const handleDrawer = (): void => {
    // setOpen((state) => !state);
    if(window.innerWidth<900){
       return setRemainingDrawerWidth(70);
    }
    setRemainingDrawerWidth((prev)=>{return prev===drawerWidth?70:300})
  };
  useEffect(()=>{
    if(window.innerWidth<900){
      setRemainingDrawerWidth(70);
    }
  },[])
  return (
    <>
      <Header drawerWidth={remainingDrawerWidth} open={true}/>
      <LeftDrawer 
      drawerWidth={remainingDrawerWidth} 
      open={true}
      setClose={handleDrawer}>
        <SideBar remainingDrawerWidth={remainingDrawerWidth}/>
      </LeftDrawer>
      <Mainlayout 
      drawerWidth={remainingDrawerWidth} 
      open={true}>
        {children}
      </Mainlayout>
    </>
  );
}

export default DashboardContainer;
