import MainPage from "@/mainPage/MainPage";
import { ArrowUpIcon, BirdIcon } from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [isClicked, setIsClicked] = useState<boolean>(true);

  const handleClick = (): void => {
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
