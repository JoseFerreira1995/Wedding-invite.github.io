import { BirdIcon, ArrowUpIcon } from "lucide-react";
import "./App.css";
import { Button } from "./components/ui/button";

import MainPage from "./mainPage/MainPage";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    return setIsClicked(false);
  };
  return (
    <>
      {isClicked ? (
        <div className=" flex flex-col items-center space-y-10 m-[50%] lg:m-[20%] hover:cursor-pointer">
          <BirdIcon
            className="animate-bounce size-20 hover:cursor-pointer"
            onClick={handleClick}
          ></BirdIcon>
          <ArrowUpIcon></ArrowUpIcon>
        </div>
      ) : (
        <MainPage></MainPage>
      )}
    </>
  );
}

export default App;
