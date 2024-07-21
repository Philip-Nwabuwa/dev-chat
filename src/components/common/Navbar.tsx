import Link from "next/link";
import UserButton from "./UserButton";
import SearchField from "./SearchField";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-5 px-4 py-3">
        <Link href={"/"} className="text-2xl font-bold text-primary">
          Devchat
        </Link>
        <SearchField />
        <UserButton className="sm:ms-auto" />
      </div>
    </nav>
  );
};

export default Navbar;
