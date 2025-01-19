import profilePic from "../images/profile-pic.webp";

export function ProfilePic() {
  return (
    <div className="flex justify-center ">
      <div className="h-64 w-64 flex justify-center">
        <div className=" h-full text-xl flex flex-col justify-center">
          <img src={profilePic} alt="Jatin" />
        </div>
      </div>
    </div>
  );
}
