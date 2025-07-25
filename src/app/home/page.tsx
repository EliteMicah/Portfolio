"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../images/Logo.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import portrait from "../../images/portrait.png";
import sunwater from "../../images/sunwater.png";
import surfboard from "../../images/surfboard.png";

export default function HomePage() {
  return (
    <div className="bg-white">
      <header className="h-18">
        <div className="grid grid-cols-3 h-full">
          <section className="flex items-center justify-evenly">
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              style={{ filter: "invert(0.2)" }}
            ></Image>
            <div></div>
            <div></div>
          </section>
          <nav className="flex items-center justify-evenly">
            <div className="w-[70%] h-4/6 border-1 rounded-4xl border-gray-400">
              <ul className="flex items-center justify-evenly h-full w-full">
                <li>
                  <Link href={"/home"}>
                    <h1 className="text-gray-500 font-semibold hover:text-gray-700 border-2 w-max ">
                      Home
                    </h1>
                  </Link>
                </li>
                <li>
                  <Link href={"/about"}>
                    <h1 className="text-gray-500 font-semibold hover:text-gray-700 border-2">
                      About
                    </h1>
                  </Link>
                </li>
                <li>
                  <Link href={"/projects"}>
                    <h1 className="text-gray-500 font-semibold hover:text-gray-700 border-2">
                      Projects
                    </h1>
                  </Link>
                </li>
                <li className="h-full flex items-center border-0 border-b-black border-black ">
                  <Link href={"/connect"}>
                    <h1 className="text-gray-500 font-semibold hover:text-gray-700 border-2">
                      Connect
                    </h1>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <section className="flex items-center justify-evenly flex-wrap">
            <div></div>
            <div></div>
            <div className="w-[20%] h-1/2 bg-gray-700 rounded-4xl flex flex-row items-center justify-evenly">
              <Link href="https://github.com/EliteMicah" target="_blank">
                <Image
                  src={github}
                  alt="github"
                  width={23}
                  height={23}
                  style={{ filter: "invert(0.7)" }}
                  className="hover:!filter-[invert(0.8)]"
                ></Image>
              </Link>
              <Link
                href="https://www.linkedin.com/in/software-engineer-micahwoodring/"
                target="_blank"
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  width={23}
                  height={23}
                  style={{ filter: "invert(0.7)" }}
                  className="hover:!filter-[invert(0.8)]"
                ></Image>
              </Link>
            </div>
          </section>
        </div>
      </header>
      <section className="flex justify-center">
        <div className="w-[90%] border-2 border-gray-300 items-center h-screen rounded-2xl">
          <div className="h-180 w-full flex items-center justify-evenly">
            <div className="flex flex-col">
              <Image
                src={sunwater}
                alt="Sun behind the ocean"
                width={500}
                height={300}
                className="absolute z-0 top-35 left-55"
                loading="lazy"
              ></Image>
              <h1 className="text-4xl font-bold">Hey, I'm Micah Woodring!</h1>
              <h2 className="text-2xl text-gray-600 font-bold">
                Software Developer
              </h2>
              <h3 className="pt-4 text-xl flex flex-row flex-wrap w-110 text-gray-700">
                Good to have you here. Explore my projects and let's connect!
                Hope you find something you like. If not, at least the scroll
                was smooth.
              </h3>
              <Image
                src={surfboard}
                alt="Surfboard"
                width={100}
                className="-rotate-12 hover:scale-103 hover:-rotate-9 duration-200 ease-in-out object-contain"
                loading="lazy"
              ></Image>
            </div>
            <div className="w-[375] h-[450] border-2 border-gray-100 rounded-3xl flex items-center justify-center">
              <Image
                src={portrait}
                alt="Portrait"
                width={300}
                height={400}
                className="rounded-3xl hover:scale-103 hover:rotate-1 duration-200 ease-in-out min-w-20"
                loading="lazy"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
