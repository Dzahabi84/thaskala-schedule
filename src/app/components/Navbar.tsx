"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname()
    return (
        <div className="z-50 w-[100%] bottom-9 fixed">
        <div className="w-[300px] lg:w-[300px] m-auto flex justify-center">
          <nav className="rounded-full bg-[#481666] flex justify-around px-1">
            <ul className="justify-around items-center flex flex-row list-none">
              <li className="py-1">
                <Link
                  href="monday"
                  className={`${pathname == "/monday" ? `bg-white text-black` : "" } flex items-center pl-2 py-2 px-2 rounded-full duration-100 active:bg-[rgba(0,0,0,0.16)] hover:text-[#481666] hover:bg-white`}
                >
                  <p className=" mx-3">1</p>
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="tuesday"
                  className={`${pathname == "/tuesday" ? `bg-white text-black` : "" } flex items-center py-2 px-2 pr-2 rounded-full duration-100 active:bg-[rgba(0,0,0,0.16)] hover:text-[#481666] hover:bg-white`}
                >
                  <p className="mx-3">2</p>
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="wednesday"
                  className={`${pathname == "/wednesday" ? `bg-white text-black` : "" } flex items-center py-2 px-2 pr-2 rounded-full duration-100 active:bg-[rgba(0,0,0,0.16)] hover:text-[#481666] hover:bg-white`}
                >
                  <p className=" mx-3">3</p>
                </Link>
             </li>
              <li className="p-1">
                <Link
                  href="thursday"
                  className={`${pathname == "/thursday" ? `bg-white text-black` : "" } flex items-center py-2 px-2 pr-2 rounded-full duration-100 active:bg-[rgba(0,0,0,0.16)] hover:text-[#481666] hover:bg-white`}
                >
                  <p className=" mx-3">4</p>
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="friday"
                  className={`${pathname == "/friday" ? `bg-white text-black` : "" } flex items-center py-2 px-2 rounded-full duration-100 active:bg-[rgba(0,0,0,0.16)] hover:text-[#481666] hover:bg-white`}
                >
                  <p className=" mx-3">5</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
}