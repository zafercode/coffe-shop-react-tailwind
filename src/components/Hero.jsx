import React from "react";

const Hero = () => {
  return (
    <div className="text-black">
      <div className="flex-1 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-black font-bold md:text-4xl p-2">
          En Lezzetli yemekler
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Damak zevkiniz için
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500 py-4">
            Hızlı, güvenilir ve lezzetli
          </p>
        </div>
        <p className="md:text-2xl font-bold sm:text-4xl text-xl text-gray-500">
          Daha iyi hizmet ve damak zevkinize uyan tatlar için tek adresiniz
        </p>
        <button className="bg-green-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Menü</button>
      </div>
    </div>
  );
};

export default Hero;
