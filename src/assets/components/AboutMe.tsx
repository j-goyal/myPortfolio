import { LinkedInIcon } from "./LinkedInIcon";
import { GithubIcon } from "./GithubIcon";
import { WorkWithMe } from "./WorkWithMe";
import { ProfilePic } from "./ProfilePic";
import { PersonalOverview } from "./PersonalOverview";

export function AboutMe() {
  return (
    <>
      <div id="AboutMe" className="flex justify-center py-4 items-center px-4 sm:px-6 md:px-8 scroll-my-10">
        <div className="bg-[#F7F7F7] flex flex-col w-full lg:w-[950px] shadow-lg rounded-3xl py-10 px-6 sm:px-8 md:px-12 sm:gap-3 gap-4 font-light text-md">
          <ProfilePic />
          <PersonalOverview/>
          <div className="flex justify-center gap-6 my-6">
            <div className="flex">
              <LinkedInIcon />
              <GithubIcon />
            </div>
            <WorkWithMe/>
          </div>
        </div>
      </div>
    </>
  );
}
