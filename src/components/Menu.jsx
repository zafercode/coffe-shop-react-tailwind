import React from "react";
import Menus from "../assets/menu-1.jpg";

const Menu = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Menus} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-green-600 font-bold">
            TAZE, DAMAK TADINIZA EN UYGUN ONLARCA ÇEŞİT
          </p>
          <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2">
            Yemek çeşitlerine göz atmak ister misiniz?
          </h1>
          <p className="text-gray-600 font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            consequatur odit, cum corporis adipisci deserunt ullam itaque, minus
            est nisi optio natus quo saepe voluptas. Perspiciatis voluptate
            aspernatur est libero?
          </p>
          <button className="bg-green-600 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black">Yemek Çeşitlerimiz</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
