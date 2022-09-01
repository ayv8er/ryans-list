import { useState } from "react";
import classNames from "classnames";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col py-6 px-2">
      <div className="flex justify-between">
        <div>
          <button
            className="md:hidden"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <div className="justify-around w-3/4 hidden md:flex">
          <button>Dashboard</button>
          <button>Signup/Login</button>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <div
          className={classNames("md:hidden flex flex-col items-start", {
            hidden: !isMobileMenuOpen,
          })}
        >
          <button>Dashboard</button>
          <button>Signup/Login</button>
        </div>
      ) : null}
    </nav>
  );
}
