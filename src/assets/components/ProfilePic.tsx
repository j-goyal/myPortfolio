import profilePic from "../images/profile-pic.webp";

export function ProfilePic() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center">
        <img
          src={profilePic}
          alt="Jatin"
          className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover"
        />
      </div>
    </div>
  );
}
