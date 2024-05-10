import { UserButton, useUser } from "@clerk/clerk-react";
import { Bell, Bookmark, Compass, Home, Instagram, Map, Menu, MessagesSquare, Search, Settings, Sun } from "lucide-react";
import CreateModal from "../modals/CreateModal";
import { Popover, PopoverContent, PopoverTrigger } from "../shad/ui/popover";
import SearchSheet from "./SearchSheet";
import NotificationSheet from "./NotificationSheet";

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
]

const Sidebar = () => {

  const { user } = useUser()

  return (
    <div className="w-[70px] sidebar:w-[250px] h-screen fixed border border-r p-2 sidebar:p-4 pb-6 z-10 bg-white">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col items-center gap-8 pt-6 sidebar:pt-0">
          <div className="sidebar:p-10 ">
            <img src="/logo.svg" alt="logo" className="w-full sidebar:block hidden" />
            <Instagram className="block sidebar:hidden" />
          </div>

          {/* List */}
          <div className="w-full flex flex-col gap-2">
            {listArray.map( (item, i) => {
              
              if(item.title == "Search") {
                return <SearchSheet
                  icon={item.icon}
                  title={item.title}
                />
              } 

              if(item.title == "Notifications") {
                return <NotificationSheet
                  icon={item.icon}
                  title={item.title}
                />
              } 

              return (
                <div key={i} className="w-full p-3 rounded-sidebar flex gap-4 items-center hover:cursor-pointer hover:bg-neutral-200/50 transition-all">
                  <item.icon />
                  <p className="text-neutral-800 sidebar:block hidden">{item.title}</p>
                </div>
              )
            }
            )}

            <CreateModal />
            
            <div className="w-full p-3 rounded-sidebar flex gap-4 items-center hover:cursor-pointer hover:bg-neutral-200/50 transition-all">
              <img src={user.imageUrl} alt="profile picture" className="w-6 h-6 rounded-full"/>
              <p className="text-neutral-800 sidebar:block hidden">Profile</p>              
            </div>
          </div>

        </div>

        {/* PopUp */}
        <Popover>
          <PopoverTrigger
            className="flex items-center gap-2.5 p-2 sidebar:p-4 rounded-lg font-bold  
          hover:bg-neutral-200/50"
          >
            <Menu className="w-8 h-8" />
            <p className="sidebar:block hidden">More</p>
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
