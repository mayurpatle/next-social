import MobileMenu from "./MobileMenu";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* left */}
      <div className="">
        <Link href="/" className="font-bold text-xl text-blue-500"> MSOCIAL </Link>
      </div>
      {/*center  */}
      <div className="hidden"></div>
      {/* right */}
      <div className="">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
