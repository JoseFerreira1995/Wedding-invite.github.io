import Card from "@/components/Card";
import image from "../assets/4W8A8945.jpg";
import bgImage from "../assets/4W8A9242.jpg";
import logo from "../assets/logo.png";
import { Calendar1Icon, MapPlusIcon, MessageCircleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const calendar =
    "https://calendar.google.com/calendar/u/0/r/day/2026/7/11?tab=mc&date=20081101";
  const mapAddress = "https://maps.app.goo.gl/uyJFurUmVWxohYU67";
  const contactChat = "https://wa.me/351911527645";
  return (
    <>
      <section>
        <div className="relative">
          <div className="absolute sm: inset-0 mt-10">
            <h1 className="font-dancing text-center text-amber-200 text-6xl">
              Inês e José
            </h1>
          </div>
          <div>
            <img className="w-full object-cover" src={bgImage}></img>
          </div>
        </div>
      </section>
      <section>
        <div className="flex gap-10 mt-20 sm: flex-col">
          <div className=" bg-blue-50">
            <h2 className="font-oswald text-center text-4xl m-5">
              Queremos convidar-vos para os nosso casamento!
            </h2>
            <p className=" font-oswald m-5 p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              error, quidem a molestiae ipsam laborum pariatur unde illum
              reiciendis? Velit sunt nulla veniam eveniet minima necessitatibus
              maiores reiciendis sapiente obcaecati?
            </p>
          </div>
          <div>
            <img className=" size-125" src={image}></img>
          </div>
        </div>
      </section>
      <section>
        <div className="flex gap-5 sm: flex-col m-10 ">
          <div className=" bg-blue-50 h-30 rounded-lg hover:bg-blue-100 active:scale-110 ">
            <a href={calendar}>
              <Card title="Dia 11 de Julho" description="14h30"></Card>
              <Calendar1Icon className=" animate-bounce ml-[46%] mt-2"></Calendar1Icon>
            </a>
          </div>
          <div className="bg-blue-50 h-30 rounded-lg hover:bg-blue-100 active:scale-110">
            <a href={mapAddress}>
              <Card title="Local" description="Quinta da Mota"></Card>
              <MapPlusIcon className=" animate-bounce ml-[46%] mt-2"></MapPlusIcon>
            </a>
          </div>
          <div className="bg-blue-50 h-30 rounded-lg hover:bg-blue-100 active:scale-110">
            <a href={contactChat}>
              <Card
                title="Confirmação"
                description="Até dia 30 de abril de 2026"
              ></Card>
              <MessageCircleIcon className="animate-bounce ml-[46%] mt-2"></MessageCircleIcon>
            </a>
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
