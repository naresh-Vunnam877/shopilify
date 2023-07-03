import React from "react";
import Product from "../Components/ProductList";
import myImg from "../assets/jersey2.png"
import cartImg1 from '../assets/jersey6.png'
import cartImg2 from '../assets/jersey3.png'
import cartImg3 from '../assets/jersey4.png'
import cartImg4 from '../assets/jersey12.png'
import cartImg5 from '../assets/jersey5.png'
import cartImg6 from '../assets/jersey6.png'
import cartImg7 from '../assets/20.png'
import cartImg8 from '../assets/19.png'

const Products = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font w-full ">
      <div className="container px-10 py-24 mx-auto">
        <div className="flex flex-wrap -m-2 justify-center  ">
          <Product imageSrc={ myImg } category="Football" title={ "Chelsea" } price={ 2300 } />
          <Product imageSrc={ cartImg1 } category="Football" title={ "Chelsea" } price={ 2300 } />
          <Product imageSrc={ cartImg2} category="Football" title={"Chelsea"} price={2300}/>
          <Product imageSrc={ cartImg3} category="Football" title={ "Chelsea" } price={ 2300 } />
          <Product imageSrc={ cartImg4} category="Football" title={"Chelsea"} price={2300}/>
          <Product imageSrc={ cartImg5 } category="Football" title={ "Chelsea" } price={ 2300 } />
          <Product imageSrc={ cartImg6 } category="Football" title={ "Chelsea" } price={ 2300 } />
          <Product imageSrc={ cartImg7 } category="Football" title={ "Chelsea" } price={ 2300 } />
          <Product imageSrc={ cartImg8} category="Football" title={"Chelsea"} price={2300}/>
        </div>
      </div>
    </section>
  );
};

export default Products;
