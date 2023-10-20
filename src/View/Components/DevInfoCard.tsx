import React from 'react'
import Button from './Button';
import images from '../../assets/images';


interface IDevInfoCardProps {
  onClose: (e: Event,isVisible: boolean) => void;
  visible: boolean;
}


const DevInfoCard = (props: IDevInfoCardProps) => {

  if(props.visible){
    document.body.style.overflow = 'hidden';
  }
  else {
    document.body.style.overflow = 'auto';
  }

  return (
   <>
   {props.visible ?
   <div className="fixed  shadow-snippet justify-self-center overflow-hidden w-2/5 flex self-center justify-center items-center ">
   <div className=" bg-white rounded-md  text-center flex flex-col justify-evenly border-2">
   <div className="self-center p-4 w-1/4">
     <img className="rounded-circle" src={images['dev']} alt='dev'/>
   </div>
   <div className='px-4'>
    <p>Hi I am Venkata Koundinya Ganugapati, A Java Full stack Developer and tech enthusiast. Thankyou for viewing my project</p>
   </div>
   <div className="self-end">
   <Button  buttonLabel={"Close"} emphasis="PRIMARY" size="md" onClick={(e: Event) => props.onClose(e,false)} />
   </div>
     </div>
 </div>
   : undefined}
   </>
  )
}

export default DevInfoCard