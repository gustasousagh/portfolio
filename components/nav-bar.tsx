
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeTogle";
import { MetricsButton } from "./metrics-button";
import { SearchInput } from "./search-input";
import { Suspense } from "react";



export const Navbar = ({
}) => {
  return (
    <div className="border-b">
      <div className="flex h-14 items-center">
        Logo
        <div className="ml-auto flex items-center space-x-2">
          <Suspense fallback={<div></div>}>
            <SearchInput />
          </Suspense>
          <MetricsButton />
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
