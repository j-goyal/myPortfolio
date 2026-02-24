import { LinkedInIcon } from "./LinkedInIcon"
import { GithubIcon } from "./GithubIcon"
import { EmailMe } from "./EmailMe"
import { ProfilePic } from "./ProfilePic"
import { PersonalOverview } from "./PersonalOverview"

export function AboutMe() {
  return (
    <>
      <div id="AboutMe" className="flex justify-center py-4 items-center px-4 sm:px-6 md:px-8 scroll-my-10">
        <div className="bg-white dark:bg-gray-800 overflow-hidden w-full lg:w-[950px] shadow-lg rounded-3xl font-light text-md">
          <div className="h-2 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-500 dark:to-gray-300"></div>
          <div className="flex flex-col py-10 px-6 sm:px-8 md:px-12 sm:gap-3 gap-4">
            <ProfilePic />
            <PersonalOverview />
            <div className="flex justify-center gap-6 my-6">
              <div className="flex">
                <LinkedInIcon />
                <GithubIcon />
              </div>
              <EmailMe />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
