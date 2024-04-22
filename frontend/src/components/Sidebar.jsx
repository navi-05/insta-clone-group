import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./shad/ui/popover";
import { Menu } from "lucide-react";
import { Settings } from "lucide-react";
import { Map } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Sun } from "lucide-react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Home } from "lucide-react";
import { Search } from "lucide-react";
import { Compass } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import { Bell } from "lucide-react";
import { PlusSquare } from "lucide-react";
import { Instagram } from "lucide-react";

// This is where your array should come (demoArray)
const popupArray = [
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

const listArray = [
  {
    icon: Home,
    title: "Home"
  },
  {
    icon: Search,
    title: "Search"
  },
  {
    icon: Compass,
    title: "Compass"
  },
  {
    icon: MessagesSquare,
    title: "Messages"
  },
  {
    icon: Bell,
    title: "Notifications"
  },
  {
    icon: PlusSquare,
    title: "Create"
  },
]

const Sidebar = () => {

  const { user } = useUser()

  return (
    <div className="w-[70px] min-sidebar:w-[250px] h-screen border border-r p-2 min-sidebar:p-4 pb-6">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col items-center gap-8 pt-6">
          <div className="min-sidebar:p-10 ">
            <img src="/logo.svg" alt="logo" className="w-full min-sidebar:block hidden" />
            <Instagram className="block min-sidebar:hidden" />
          </div>

          {/* List */}
          <div className="w-full flex flex-col gap-2">
            {listArray.map( (item, i) => (
              <div key={i} className="w-full p-3 rounded-lg flex gap-4 items-center hover:cursor-pointer hover:bg-neutral-200/50 transition-all">
                <item.icon />
                <p className="text-neutral-800 min-sidebar:block hidden">{item.title}</p>
              </div>
            ) )}
            <div className="w-full p-3 rounded-lg flex gap-4 items-center hover:cursor-pointer hover:bg-neutral-200/50 transition-all">
              <img src={user.imageUrl} alt="profile picture" className="w-6 h-6 rounded-full"/>
              <p className="text-neutral-800 min-sidebar:block hidden">Profile</p>              
            </div>
          </div>

        </div>

        {/* PopUp */}
        <Popover>
          <PopoverTrigger
            className="flex items-center gap-2.5 p-2 min-sidebar:p-4 rounded-lg font-bold  
          hover:bg-neutral-200/50"
          >
            <Menu className="w-8 h-8" />
            <p className="min-sidebar:block hidden">More</p>
          </PopoverTrigger>
          <PopoverContent className="ml-4 p-2 shadow-lg">
            {popupArray.map((item, i) => (
              <div
                key={i}
              >
                <div
                  className="flex items-center gap-4 hover:cursor-pointer hover:bg-neutral-200/50 transition-all p-4 rounded-lg cursor-pointer"
                >
                  <item.icon />
                  {item.title}
                </div>
                {i == 3 && (
                  <div className="h-[1px] border-b hover:cursor-pointer border-neutral-500 transition-all" />
                )}
              </div>
            ))}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Sidebar;
