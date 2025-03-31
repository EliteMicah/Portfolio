"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../svg/logo.svg";
import github from "../../svg/github.svg";
import linkedin from "../../svg/linkedin.svg";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="bg-white">
      <header className="h-18">
        <div className="grid grid-cols-3 h-full">
          <section className="flex items-center justify-evenly">
            <Image src={logo} alt="Logo" width={40} height={40} />
            <div></div>
            <div></div>
          </section>
          <nav className="flex items-center justify-evenly">
            <div className="w-[70%] h-4/6 border-1 rounded-4xl border-gray-400">
              <ul className="flex items-center justify-evenly h-full">
                <li>
                  <Link href={"/home"}>
                    <h1 className="text-gray-500 hover:text-gray-700">Home</h1>
                  </Link>
                </li>
                <li>
                  <Link href={"/about"}>
                    <h1 className="text-gray-500 hover:text-gray-700">About</h1>
                  </Link>
                </li>
                <li>
                  <Link href={"/projects"}>
                    <h1 className="text-gray-500 hover:text-gray-700">
                      Projects
                    </h1>
                  </Link>
                </li>
                <li className="h-full flex items-center border-0 border-b-black border-black ">
                  <Link href={"/connect"}>
                    <h1 className="text-gray-500 hover:text-gray-700">
                      Connect
                    </h1>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <section className="flex items-center justify-evenly">
            <div className="w-[25%] h-1/2 bg-gray-700 rounded-4xl flex flex-row items-center justify-evenly">
              <Link
                href="https://github.com/EliteMicah/SWE-Over-Under"
                target="_blank"
              >
                <Image src={github} alt="github" width={25} height={25} />
              </Link>
              <Image src={linkedin} alt="linkedin" width={25} height={25} />
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}
