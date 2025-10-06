import { useState } from "react";
import img from "../assets/logo.png";
import { headerLinks } from "../constants";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const toggle = () => {
    setIsopen(!isOpen);
  };
  const navigator = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigator(`/search?q=${queryTerm}`);
  };
  return (
    <nav className="bg-black top-0 z-60 sticky w-full">
      <div className="relative mx-auto">
        <div className="flex justify-around items-center border-b border-neutral-600  py-5">
          {/* logo */}
          <a href="">
            <div className="flex flex-shrink-0 justify-center gap-1 items-center mr-5">
              <img src={img} alt="" className="size-6 lg:size-8" />
              <h2 className="text-sm lg:text-xl">MovieHunt</h2>
            </div>
          </a>
          {/* links */}
          <div className="tracking-wide justify-center items-center gap-8 hidden lg:flex">
            {headerLinks.map((links, index) => (
              <div key={index} className="capitalize text-[16px]  ">
                <NavLink
                  to={links.href}
                  className={({ isActive }) =>
                    isActive ? "text-neutral-400" : "text-neutral-100"
                  }
                >
                  {links.text}
                </NavLink>
              </div>
            ))}
          </div>
          {/* search */}
          <form className="relative hidden lg:flex">
            <input
              type="text"
              className="bg-white p-0.5 lg:p-1.5 text-black rounded"
              placeholder="Search Movies"
            />
          </form>
          {/* toggle */}
          <div
            onClick={toggle}
            className="hover:border p-1 ml-6 border-neutral-800 rounded hover:bg-neutral-800 lg:hidden z-130"
          >
            {isOpen ? <X /> : <Menu />}
          </div>

          {isOpen && (
            <div className=" absolute flex flex-col z-120 bg-neutral-900 text-center mt-40 pb-5 pt-5  w-full">
              {headerLinks.map((links, index) => (
                <div key={index} className="capitalize text-[13px] p-2">
                  <NavLink
                    to={links.href}
                    className={({ isActive }) =>
                      isActive ? "text-neutral-600" : "text-neutral-100"
                    }
                  >
                    {links.text}
                  </NavLink>
                </div>
              ))}
              <form onSubmit={handleSearch} className="mt-5">
                <input
                  name="search"
                  type="text"
                  className="bg-white p-0.5 w-1/2 h-10 lg:p-1.5 text-black rounded"
                  placeholder="Search Movies"
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
