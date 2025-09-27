import logo from "../assets/logo.png"
import {navItems} from "../constants"
import {Menu,X} from "lucide-react"
import { useState } from "react"


export const Header = () => {

    const[mobileDrawer,setMobileDrawer]=useState(false);

    const toggleMenu=(()=>{
        setMobileDrawer(!mobileDrawer);
    })

  return (
    <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700/80 backdrop-blur-lg">
        <div className="container px-4 relative mx-auto text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="" className="size-10 mr-2 rounded-full" />
                    <span className="text-xl tracking-tight">ZapCode</span>
                </div>
                <ul className="lg:flex hidden ml-15 gap-12 capitalize text-[15px]">
                    {navItems.map((i,index)=>(
                        <li key={index}>
                            <a className="hover:text-neutral-300" href={i.href}>{i.label}</a>
                        </li>
                    ))}

                </ul> 
                <div className="items-center justify-center hidden lg:flex space-x-12">
                    <a href="#" className="hover:scale-105 transition px-3 py-2 border border-white rounded">Sign In </a>
                    <a href="#" className="hover:scale-105 transition px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded ">Create an account</a>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        {mobileDrawer?<X/>:<Menu/>}
                    </button>
                </div>
            </div>
            
            {mobileDrawer&&(
                <div className="flex flex-col items-center p-3 w-full fixed z-20 right-0 justify-around lg:hidden bg-neutral-900 capitalize ">
                    <ul className="">
                    
                    <li className="py-3 "><a className="hover:text-neutral-300" href="#feature">features</a></li>
                    <li className="py-3 "><a className="hover:text-neutral-300" href="#workflow">workflow</a></li>
                    <li className="py-3 "><a className="hover:text-neutral-300" href="#pricing">pricing</a></li>
                    <li className="py-3 "><a className="hover:text-neutral-300" href="#testimonials">testimonials</a></li>

                </ul> 
                <div className="flex gap-6 justify-center my-5">
                <a href="#" className="hover:scale-105 transition px-3 py-2 border border-white rounded">Sign In </a>
                <a href="#" className="hover:scale-105 transition px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded ">Create an account</a>
                </div>
                </div>
            )}
        </div>
    </nav>
  )
}