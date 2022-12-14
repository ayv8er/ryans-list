import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col py-2 px-2">
      <div className="flex justify-between">
        <div className="md:hidden">
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <div className="justify-around w-full hidden md:flex">
          <button>
            <Link href="/">Search</Link>
          </button>
          <button>
            <Link href="/favorites">Favorites</Link>
          </button>
          <button>Signup/Login</button>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <div
          className={classNames("md:hidden flex flex-col items-start", {
            hidden: !isMobileMenuOpen,
          })}
        >
          <button>
            <Link href="/">Search</Link>
          </button>
          <button>
            <Link href="/favorites">Favorites</Link>
          </button>
          <button>Signup/Login</button>
        </div>
      ) : null}
    </nav>
  );
}
