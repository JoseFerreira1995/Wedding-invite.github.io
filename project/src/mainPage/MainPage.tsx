import Card from "@/components/Card";
import image from "../assets/main.jpg";
import bgImage from "../assets/4W8A9242.jpg";
import logo from "../assets/logo.png";
import { Calendar1Icon, MapPlusIcon, MessageCircleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

const calendar = "https://calendar.google.com/calendar/u/0/r/day/2026/7/11?tab=mc&date=20081101";
const mapAddress = "https://maps.app.goo.gl/uyJFurUmVWxohYU67";
const contactChatJose = "https://wa.me/351911527645";
const contactChatInes = "https://wa.me/351939504513";

  return (
    <>
      <section>
        <div className="relative">
          <div className="absolute sm:inset-0 mt-10">
            <h1 className="font-Alex text-center text-orange-200 text-6xl">
              Inês e José
            </h1>
          </div>
          <div>
            <img className="w-full object-cover" src={bgImage}></img>
          </div>
        </div>
      </section>
      <section>
        <div className=" flex flex-col gap-10 mt-20 sm:flex-col rounded-xl">
          <div className=" bg-orange-200 p-10">
            <p className=" font-open m-5 p-3 text-center text-2xl text-sky-700">
              Vem celebrar connosco o nosso casamento!
            </p>
          </div>
          <img
            className=" max-w-md rounded-xl shadow-lg aspect-3/4 object-cover"
            src={image}
          ></img>
        </div>
      </section>
      <section>
        <div className="flex gap-5 sm: flex-col m-10 ">
          <div className=" bg-blue-50 h-30 rounded-lg hover:bg-blue-100 active:scale-110 ">
            <a href={calendar}>
              <Card title="Dia 11 de Julho" description="14h30"></Card>
              <Calendar1Icon className=" text-sky-700 animate-bounce ml-[46%] mt-2"></Calendar1Icon>
            </a>
          </div>
          <div className="bg-blue-50 h-30 rounded-lg hover:bg-blue-100 active:scale-110">
            <a href={mapAddress}>
              <Card title="Local" description="Quinta da Mota"></Card>
              <MapPlusIcon className=" text-sky-700 animate-bounce ml-[46%] mt-2"></MapPlusIcon>
            </a>
          </div>
          <div className="bg-blue-50 h-45 rounded-lg hover:bg-blue-100 active:scale-110">
            <Card
              title="Confirmação"
              description="Até dia 30 de abril de 2026"
            ></Card>
            <div className="flex justify-center space-x-20 mt-[5%]">
              <a href={contactChatJose}>
                <MessageCircleIcon className="text-sky-700 animate-bounce  mt-2"></MessageCircleIcon>
                <p>José</p>
              </a>
              <a href={contactChatInes}>
                <MessageCircleIcon className="text-sky-700 animate-bounce  mt-2"></MessageCircleIcon>
                <p>Inês</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="p-10 flex items-center flex-col">
          <img
            className="size-15"
            src={logo}
            onClick={() => navigate("/")}
          ></img>
        </div>
      </footer>
    </>
  );
}
