//import piu_tgt from "/images/piu_tgt.png";
import Navigation from "../components/Navigation";
import Typewriter from "../components/TypeWriter";
import piu_tgt from "../images/piu_tgt.png";

function Home({ signInWithDiscord }) {
  return (
    <div className="min-h-screen text-white bg-background-color">
      {/* Navigation */}
      <Navigation signInWithDiscord={signInWithDiscord} />

      {/* Hero Section */}
      <section className="container flex flex-col items-center px-4 py-12 mx-auto mb-8 md:flex-row">
        <div className="flex flex-col items-center w-full md:w-1/2 md:items-start">
          <img
            src={piu_tgt}
            alt="Image 1"
            className="h-auto mb-4 transition-transform duration-300 ease-in-out transform rounded-lg w-100 md:mb-0 hover:scale-105"
            style={{ filter: "brightness(1)" }}
            onMouseEnter={(e) => {
              e.target.style.filter = "brightness(0.75)";
            }}
            onMouseLeave={(e) => {
              e.target.style.filter = "brightness(1)";
            }}
          />
        </div>

        <div className="w-full pl-0 mt-8 md:w-1/2 md:pl-8 md:mt-0">
          <h1 className="text-4xl font-bold text-white my-7">
            Elevate Your University Experience
          </h1>
          <Typewriter
            text="Do you find navigating through the student handbook to be a hassle? 
            Our bot is here to ease that process for you!"
            backgroundColor=" text-2xl  bg-background-text mr-16 px-10 py-8 rounded-2xl"
            textColor="text-description-color"
          />

          <button className="px-6 py-3 mt-6 text-xl font-bold text-white transition duration-300 ease-in-out transform rounded-lg bg-purple-custom font-Lato hover:bg-purple-600 hover:text-white hover:scale-105">
            Add to server
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
