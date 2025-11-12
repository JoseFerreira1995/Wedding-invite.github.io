import { ArrowUpIcon, BirdIcon } from "lucide-react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const alertMessage = () => {
    return alert("Not Finished");
  };

  return (
    <>
      <div className=" flex flex-col items-center space-y-10 m-[50%] lg:m-[20%]">
        <BirdIcon
          className="animate-bounce size-20"
          onClick={alertMessage}
        ></BirdIcon>
        <ArrowUpIcon></ArrowUpIcon>
        <Button
          className=" hover:bg-blue-500"
          variant={"outline"}
          onClick={alertMessage}
        >
          Clica Aqui
        </Button>
      </div>
    </>
  );
}

export default App;
