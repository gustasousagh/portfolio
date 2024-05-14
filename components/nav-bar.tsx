import { ThemeToggle } from "./ThemeTogle";
import { MetricsButton } from "./metrics-button";
import { SearchInput } from "./search-input";

const Navbar = async () => {
  return (
    <div className="border-b">
      <div className="flex h-14 items-center">
        Logo
        <div className="ml-auto flex items-center space-x-2">
          <SearchInput />
          <MetricsButton/>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
export default Navbar;