import { NavItems } from "./NavItems";
import { Resume } from "./Resume";

export function TopBar() {
  return (
    <div className="bg-[#fafafa] fixed top-0 left-0 w-full z-50 shadow h-14 flex justify-between px-4 py-8">
      <NavItems/>
      <Resume/>
    </div>
  );
}
