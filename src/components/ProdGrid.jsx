import React, {useState} from "react";
import products from "../product.json";
import ProdCard from "./ProdCard";
import { MdOutlineSearch } from "react-icons/md";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";


function ProdGrid() {
  const [finder, setFinder]  = useState("");
  const filtered= products.filter(i=> i.name.toLowerCase().includes(finder))
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className='p-2 border border-brandbrown m-4 rounded-full w-1/2 md:w-[500px] flex'>
          <input
            type="text"
            className="border-none outline-none bg-transparent w-full px-3"
            placeholder="Search for product"
            onChange={(e)=>{setFinder(e.target.value.toLowerCase())}}
          />
          <MdOutlineSearch className='text-brandbrown text-xl'/>
        </div>
        <div className='text-brandbrown flex space-x-3 md:space-x-20 text-3xl px-3 md:px-10'>
    <IoIosArrowDropleft />
    <IoIosArrowDropright/>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {filtered.map((product, index) => (
          <ProdCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProdGrid;
