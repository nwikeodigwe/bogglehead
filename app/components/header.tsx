import { IoIosSearch } from "react-icons/io";
import { VscSaveAs } from "react-icons/vsc";
import { FaHome } from "react-icons/fa";
import { IoPower } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { FaRegQuestionCircle } from "react-icons/fa";

import Link from "next/link";
export default function Header() {
  return (
    <header className="flex flex-col gap-3">
      <div className="flex items-center justify-between p-5 rounded-lg  text-white bg-gradient-to-b from-brand-800 to-brand-500">
        <div className="flex items-center gap-3">
          <div>Logo</div>
          <div>
            <h1 className="font-bold !text-lg">Boogleheads.org</h1>
            <p className="font-light">investing advice by Jack Bogle</p>
          </div>
        </div>
        <div className="relative group">
          <input
            type="text"
            className="border border-gray-300 rounded-lg py-2 pl-3 pr-10 group-focus:outline-none group-focus:border-blue-500 active:outline-none"
            placeholder="Search"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-4 py-2 bg-gray-300 text-white font-semibold rounded-r-lg group-hover:bg-gray-00 group-focus:outline-none group-focus:bg-gray-300"
          >
            <IoIosSearch />
          </button>
        </div>
      </div>
      <div className="flex flex-col rounded-lg bg-brand-100 px-2 text-brand-800">
        <div className="flex items-center justify-between border-b-[1px] border-gray-50 py-1">
          <ul className="flex gap-4">
            <li>
              <Link
                href="/menu"
                className="flex gap-1 items-center hover:underline"
              >
                <IoMdMenu />
                Quick links
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="flex gap-1 items-center hover:underline"
              >
                <IoBookSharp />
                Forum Policies
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="flex gap-1 items-center hover:underline"
              >
                <FaHome /> Wiki
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="flex gap-1 items-center hover:underline"
              >
                <GiReceiveMoney />
                Investing Advice
              </Link>
            </li>
            <li className="flex gap-1">
              <Link
                href="/menu"
                className="flex gap-1 items-center hover:underline"
              >
                <FaRegQuestionCircle />
                FAQ
              </Link>
            </li>
          </ul>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <VscSaveAs />
              <Link href="/register" className="hover:underline">
                Register
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <IoPower />
              <Link href="/login" className="hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className=" py-1">
          <div className="font-bold flex gap-2 items-center ">
            <FaHome />
            <Link href="/">Board Index</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
