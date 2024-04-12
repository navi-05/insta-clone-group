import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./shad/ui/popover";
import { Menu } from "lucide-react";
import { Settings } from "lucide-react";
import { Map } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Sun } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

// This is where your array should come (demoArray)
const demoArray = [
  {
    icon: Settings ,
    title: "Settings"
  },
  {
    icon: Map,
    title: "Map"
  },
  {
    icon: Bookmark,
    title: "Saved"
  },
  {
    icon: Sun,
    title: "Switch Appearance"
  },
  {
    icon: UserButton,
    title: "Profile"
  }
]

const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen border border-r p-4 pb-6">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col items-start gap-5">
          <div className="p-10">
            <img src="/logo.svg" alt="logo" className="w-full" />
          </div>

          {/* List */}
        </div>

        {/* PopUp */}
        <Popover>
          <PopoverTrigger
            className="flex items-center gap-2.5 p-4 rounded-lg font-bold  
          hover:bg-neutral-200/50"
          >
            <Menu className="w-8 h-8" />
            More
          </PopoverTrigger>
          <PopoverContent className="ml-4 p-2 shadow-lg">
            {demoArray.map((item, i) => (
              <>
                <div
                  key={i}
                  className="flex items-center gap-4 hover:bg-neutral-200/50 p-4 rounded-lg cursor-pointer"
                >
                  <item.icon />
                  {item.title}
                </div>
                {i == 3 && (
                  <div className="h-[1px] border-b border-neutral-500" />
                )}
              </>
            ))}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Sidebar;
