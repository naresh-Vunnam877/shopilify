import React from "react";
import AnchorLink from "../../Components/common/Link";
import HeroImg from '../../assets/jersey6.png'
const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center px-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Before they sold out
          </h1>
          <p className="mb-8 leading-relaxed">
            Stand out from the crowd with personalized sport jerseys tailored to your style and team spirit. Get started today and create your one-of-a-kind jersey that represents your passion for the game.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <AnchorLink path={'products'} name={'BUY NOW'}/>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src={HeroImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
