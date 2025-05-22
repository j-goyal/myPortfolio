import { FaLinkedin } from "react-icons/fa"
import { LINKEDIN_PROFILE_LINK } from "../constants/constants"

export function LinkedInIcon() {
  return (
    <div
      className="text-[#2167b8] hover:text-[#2167b8dc] cursor-pointer"
      onClick={() => window.open(LINKEDIN_PROFILE_LINK, "_blank")}
    >
      <FaLinkedin size={50} />
    </div>
  )
}
