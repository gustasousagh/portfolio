import { ThemeToggle } from "./ThemeTogle";
import { SearchInput } from "./search-input";

const Navbar = async () => {
  return (
    <div className="border-b">
      <div className="flex h-14 items-center px-4">
        <div className="ml-auto flex items-center space-x-2">
          <SearchInput />
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
export default Navbar;