import React from "react";
import Button from "./Button";
import images from "../../assets/images";



interface ICodeSnippetProps {
  code: string;
  onClose?: (e: Event) => void;
  visible: boolean;
}

const CodeSnippet = (props: ICodeSnippetProps) => {

  if(props.visible){
    document.body.style.overflow = 'hidden';
  }
  else {
    document.body.style.overflow = 'auto';
  }

  const snippet: any = images[props.code];
  const snippet2: any = props.code === "mergeSort" ? images["mergeSort2"] : props.code === 'quickSort' ? images["quickSort2"] : undefined;

  return (
    <>{
      props.visible ?  <div className="fixed top-20 shadow-snippet  overflow-hidden left-0 w-full flex justify-center items-center ">
      <div className=" bg-white rounded-md  text-center flex flex-col justify-evenly border-2">
      <div className="self-start font-bold text-snippetText p-4">
        <h3>Java Code:</h3>
      </div>
      <div className="self-center mx-4 py-4 px-8 flex flex-row justify-evenly">
        <img src={snippet} alt={props.code} className="w-11/12 h-snippet" />
        {snippet2 ? <img src={snippet2} alt={props.code} className="w-11/12 h-snippet"/> : undefined }
      </div>
      <div className="self-end">
      <Button  buttonLabel={"Close"} emphasis="PRIMARY" size="md" onClick={props.onClose} />
      </div>
        </div>
    </div> : undefined
    }
    </>
  );
};

export default CodeSnippet;
