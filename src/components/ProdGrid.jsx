import React, {useState} from "react";

import ProdCard from "./ProdCard";
import { MdOutlineSearch } from "react-icons/md";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import ReactPaginate from 'react-paginate';
import './ProdGrid.css';
import { CartState } from "../contexts/ShoppingContext";


function ProdGrid() {
  const [finder, setFinder]  = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemPerPage= 9;

  const {produce} = CartState()
  const products = produce.products


  const filtered= products.filter(i=> i.name.toLowerCase().includes(finder))

  const pageCount =  Math.ceil(filtered.length / itemPerPage);

  const getCurrentItems = () => {
    const startIndex = currentPage * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return filtered.slice(startIndex, endIndex);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Handle search term change
  const handleSearchChange = (e) => {
    setFinder(e.target.value.toLowerCase()) 
    setCurrentPage(0);
    // Reset to first page on search term change
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className='p-2 border border-brandbrown m-4 rounded-full w-1/2 md:w-[500px] flex'>
          <input
            type="text"
            className="border-none outline-none bg-transparent w-full px-3"
            placeholder="Search for product"
            onChange={handleSearchChange}
          />
          <MdOutlineSearch className='text-brandbrown text-xl'/>
        </div>
        <div className='text-brandbrown flex space-x-3 md:space-x-20 text-3xl px-3 md:px-10'>
    <IoIosArrowDropleft />
    <IoIosArrowDropright/>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {getCurrentItems().map((product, index) => (
          <ProdCard key={index} {...product} />
        ))}
        
      </div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'current'}
        previousClassName={'previous'}
        nextClassName={'next'}

      />
    </div>
  );
}

export default ProdGrid;
