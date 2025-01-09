import { Skills } from "./Skills";
import { LinkedInIcon } from "./LinkedInIcon";
import { GithubIcon } from "./GithubIcon";
import profilePic from "../images/profile-pic.png";

export function AboutMe() {
  return (
    <>
      <div id="AboutMe" className="flex justify-center py-4 scroll-my-10">
        <div className="bg-[#F7F7F7] flex flex-col w-full lg:w-[950px] shadow-md rounded-3xl py-10 px-6 sm:px-8 md:px-12 sm:gap-3 gap-4 font-light text-md">
          <div className="flex justify-center ">
            <div className=" rounded-full h-64 w-64 mt-1 mr-2 flex justify-center">
              <div className=" h-full text-xl flex flex-col justify-center">
                <img src={profilePic} alt="Jatin" />
              </div>
            </div>
          </div>
          <div className="flex justify-center text-center flex-col items-center py-3 text-regal-grey">
            <div className="text-3xl font-bold">Hi, I'm Jatin.</div>
            <div className="text-lg">
              <span className="font-medium">J</span>udicious,
              <span className="font-medium"> A</span>ctive,
              <span className="font-medium"> T</span>rustworthy,
              <span className="font-medium"> I</span>nnovative,
              <span className="font-medium"> N</span>oticeable
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-6xl font-extrabold text-center">
              Software Developer.
            </div>
          </div>
          <div></div>
          <div className=" flex justify-center items-center text-gray-500 text-base font-bold text-center">
            Visionary Full-Stack Developer | Harnessing Technology For Business
            Transformation | Committed to Building User-Centric, Scalable &
            Future-Ready Applications
          </div>
          <div className="flex justify-center gap-6 my-6">
            <div className="flex">
              <LinkedInIcon />
              <div className="w-1"></div>
              <GithubIcon />
            </div>
            <div className=" flex justify-center items-center">
              <button
                className=" bg-black hover:shadow-lg h-11 hover:bg-slate-800
           text-white text-md rounded-lg py-2 px-8"
                onClick={() =>
                  window.open("mailto:jating07925@gmail.com", "_blank")
                }
              >
                Work with me -&gt;
              </button>
            </div>
          </div>
          <Skills />
        </div>
      </div>
      <div className="h-8"></div>
    </>
  );
}
