import React from 'react'
import Nav from './Nav'

// import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <div>
        <header>
           
            <Nav/>
            <div className="h-48  md:h-96 w-full flex justify-start -z-30 text-brandbrown font-serif relative"
                style={{
                    backgroundImage: "url(/assets/istockphoto-1489837649-1024x1024.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="w-1/2 flex flex-col absolute left-4 bottom-5 py-10">
                {/* <img src="/assets/Frame 13.png" alt="logo" className='md:h-[100px]' /> */}
                    
                    <p className="md:text-4xl md:w-96 md:leading-tight w-full">Elevate your whine experience</p>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header