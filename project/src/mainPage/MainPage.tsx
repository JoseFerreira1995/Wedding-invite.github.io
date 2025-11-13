import image from "../assets/4W8A9005.jpg";
import bgImage from "../assets/4W8A9242.jpg";

export default function MainPage() {
  return (
    <>
      <section>
        <div className="relative">
          <div className="absolute inset-0  lg:top-20 md:inset-0 top-20 sm:inset-0 top-20  ">
            <h1 className="text-center text-amber-200 text-6xl">Inês e José</h1>
          </div>
          <div>
            <img className="w-full object-cover" src={bgImage}></img>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="absolute">
          <img src={image}></img>
        </div>
      </section>
    </>
  );
}
