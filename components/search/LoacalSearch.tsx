"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";

interface Props {
  imgsrc: string;
  placeholder: string;
  route: string;
  otherClasses?: string;
}

const LocalSearch = ({ imgsrc, placeholder, route, otherClasses }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
        
      } else {
        if (pathname === route) {
          //route in this way /
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, route, searchParams, pathname]);

  return (
    <div className={`relative w-full ${otherClasses}`}>
      <Image
        src={imgsrc}
        alt="search"
        width={20}
        height={20}
        className="absolute left-4 top-1/2 -translate-y-[45%] pointer-events-none"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus w-full rounded-[10px] background-dark400_light900 pl-12 pr-4 h-[48px] text-sm placeholder:text-light-500 text-light-100 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
