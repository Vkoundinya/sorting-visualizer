import React, { useState } from "react";
import Button from "../Components/Button";
import DevInfoCard from "../Components/DevInfoCard";

interface IHomepageState{
  isDevInfoVisible: boolean;
}

const Homepage = () => {


  const [homepageState, setHomepageState] = useState<IHomepageState>({isDevInfoVisible: false});
  const  handleDevInfoClick = (e: Event, isVisible: boolean) => {
      e.preventDefault();
      setHomepageState({isDevInfoVisible: isVisible});
  }

  return (
   <>
   <div className=" grid grid-rows-3 h-screen w-full m-auto bg-center bg-no-repeat bg-cover bg-homepage">
    <div className="justify-self-end m-8">
    <Button size = 'md' emphasis= 'PRIMARY' buttonLabel="Developer" onClick={(e: Event) => handleDevInfoClick(e,true)} />
    </div>
    <div className="justify-self-center font-bold text-5xl  text-white">
      <h1>{"Sorting Simplified"}</h1>
    </div>
    <div className="justify-self-center font-bold text-white">
      <h3>
        {"Learn sorting Algorithms the easier way while visualizing"}
      </h3>
    </div>
    <DevInfoCard onClose={(e: Event) => handleDevInfoClick(e,false)} visible={homepageState.isDevInfoVisible} />
   </div>
   </>
)};

export default Homepage