import Image from "next/image";

export function ProfilePic() {
  return (
    <div className="flex justify-center">
      <Image
        src="/profile-pic.webp"
        alt="Jatin's Profile Picture"
        width={256}
        height={256}
        className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover"
        priority
      />
    </div>
  );
}