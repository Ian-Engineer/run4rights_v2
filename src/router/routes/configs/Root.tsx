
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "../../../main/landing";
import NavigationBar from "../../../main/_sharedComponents/navigationBar/Navigation";

const Root = () => {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    // used to set the view height based on orientation of a mobile device
    const setViewHeight = () => {
      const vh = window.innerHeight*0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setViewHeight();

    window.addEventListener('resize', setViewHeight);

    return () => {
      window.removeEventListener('resize', setViewHeight)
    }
  },[])

  return (
    <div className="max-h-screen h-screen max-w-screen w-screen flex flex-col flex-grow">
      {loading ? <LandingPage />
      :
      <>
      <NavigationBar />
      <div className="flex-grow flex overflow-y-auto w-full justify-center z-10">
        <Outlet />
      </div>
      <div className="header">
        <img 
          src="/moon.png" 
          alt="moon" 
          className="header-image"
        />
      </div>
      <div className="flex justify-center">
        <div className="footer">
          <img 
            src="/hauntedhouse.png" 
            alt="Haunted House" 
            className="footer-image"
          />
        </div>
      </div>
      </>
      }
    </div>
  );
};

export default Root;
