"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import MaxWidth from "./width";

export const SearchInput = () => {
  const [value, setValue] = useState("")
  const debouncedValue = useDebounce(value);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentCategoryId = searchParams.get("categoryId");

  useEffect(() => {
    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        categoryId: currentCategoryId,
        title: debouncedValue,
      }
    }, { skipEmptyString: true, skipNull: true });

    router.push(url);
  }, [debouncedValue, currentCategoryId, router, pathname])

  return (
    
    <Sheet>
  <SheetTrigger className="p-0">
  <Button
  asChild
    variant={"outline"}
    size={"icon"}
    >
      <Search className="p-2"/>
    </Button>
  </SheetTrigger>
  
  <SheetContent className="p-1" side={"top"}>
    <MaxWidth>
    <div className="relative">
      <Search
        className="h-4 w-4 absolute top-3 left-3 text-slate-600"
      />
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-full  pl-9 rounded-md bg-slate-50"
        placeholder="Pesquise por um projeto"
      />
    </div>
   </MaxWidth>
  </SheetContent>
  
    
    </Sheet>
    
  )
}