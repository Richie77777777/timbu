import React from "react";
import { GoShieldCheck } from "react-icons/go";
// import { LiaShippingFastSolid } from "react-icons/lia";
// import { AiOutlineDollarCircle } from "react-icons/ai";
import "./Product.css";
import Shop from "../components/Shop";

function Products() {
  return (
    <div className="">
      <div className="p-7 md:p-12">
        <div className=" m-auto bg-brandteal/60 py-7  rounded  flex justify-center md:space-x-2">
          <div className="box-inf">
            <GoShieldCheck className="text-xl md:text-5xl" />
            <h2 className="font-bold text-sm md:text-xl">Certified</h2>
            <p className="text-xs md:text-xl">
              Certified Marketplace since 2024
            </p>
          </div>
          <div className="box-inf">
            <svg
              width="36"
              height="33"
              className=" w-6 h-5 md:w-10 md:h-10"
              viewBox="0 0 36 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 1.5H30.75C31.7446 1.5 32.6984 1.89509 33.4016 2.59835C34.1049 3.30161 34.5 4.25544 34.5 5.25V27.75C34.5 28.7446 34.1049 29.6984 33.4016 30.4016C32.6984 31.1049 31.7446 31.5 30.75 31.5H8.25C7.25544 31.5 6.30161 31.1049 5.59835 30.4016C4.89509 29.6984 4.5 28.7446 4.5 27.75V16.5M19.5 10.875V1.5M12 9H2.625"
                stroke="#501B1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h2 className="font-bold text-sm md:text-xl">Shipping</h2>
            <p className="text-xs md:text-xl">Fast and reliable nationwide</p>
          </div>
          <div className="box-inf border-none">
            <svg
              width="41"
              height="41"
              className=" w-6 h-5 md:w-10 md:h-10"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.5 5.03125H31.75C32.8689 5.03125 33.9419 5.47572 34.7331 6.26689C35.5243 7.05806 35.9688 8.13112 35.9688 9.25V20.5C35.9688 21.6189 35.5243 22.6919 34.7331 23.4831C33.9419 24.2743 32.8689 24.7188 31.75 24.7188H28.9375V20.5C28.9375 18.2622 28.0486 16.1161 26.4662 14.5338C24.8839 12.9514 22.7378 12.0625 20.5 12.0625H16.2812V9.25C16.2812 8.13112 16.7257 7.05806 17.5169 6.26689C18.3081 5.47572 19.3811 5.03125 20.5 5.03125ZM12.0625 12.0625V9.25C12.0625 7.01224 12.9514 4.86612 14.5338 3.28379C16.1161 1.70145 18.2622 0.8125 20.5 0.8125H31.75C33.9878 0.8125 36.1339 1.70145 37.7162 3.28379C39.2986 4.86612 40.1875 7.01224 40.1875 9.25V20.5C40.1875 22.7378 39.2986 24.8839 37.7162 26.4662C36.1339 28.0486 33.9878 28.9375 31.75 28.9375H28.9375V31.75C28.9375 33.9878 28.0486 36.1339 26.4662 37.7162C24.8839 39.2986 22.7378 40.1875 20.5 40.1875H9.25C7.01224 40.1875 4.86612 39.2986 3.28379 37.7162C1.70145 36.1339 0.8125 33.9878 0.8125 31.75V20.5C0.8125 18.2622 1.70145 16.1161 3.28379 14.5338C4.86612 12.9514 7.01224 12.0625 9.25 12.0625H12.0625ZM24.7188 28.9375V31.75C24.7188 32.8689 24.2743 33.9419 23.4831 34.7331C22.6919 35.5243 21.6189 35.9688 20.5 35.9688H9.25C8.13112 35.9688 7.05806 35.5243 6.26689 34.7331C5.47572 33.9419 5.03125 32.8689 5.03125 31.75V20.5C5.03125 19.3811 5.47572 18.3081 6.26689 17.5169C7.05806 16.7257 8.13112 16.2812 9.25 16.2812H12.0625V20.5C12.0625 22.7378 12.9514 24.8839 14.5338 26.4662C16.1161 28.0486 18.2622 28.9375 20.5 28.9375H24.7188ZM24.7188 24.7188H20.5C19.3811 24.7188 18.3081 24.2743 17.5169 23.4831C16.7257 22.6919 16.2812 21.6189 16.2812 20.5V16.2812H20.5C21.6189 16.2812 22.6919 16.7257 23.4831 17.5169C24.2743 18.3081 24.7188 19.3811 24.7188 20.5V24.7188Z"
                fill="#501B1F"
              />
            </svg>
            <h2 className="font-bold text-sm md:text-xl">Transparent</h2>
            <p className="text-xs md:text-xl">Seemless return experience</p>
          </div>
        </div>
      </div>
      <Shop/>
    </div>
  );
}

export default Products;
