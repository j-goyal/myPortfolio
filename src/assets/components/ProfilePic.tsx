import profilePic from "../images/profile-pic.webp";

export function ProfilePic() {
  return (
    <div className="flex justify-center ">
      <div className=" rounded-full h-64 w-64 mt-1 mr-2 flex justify-center">
        <div className=" h-full text-xl flex flex-col justify-center">
          <img src={profilePic} alt="Jatin" />
        </div>
      </div>
    </div>
  );
}
