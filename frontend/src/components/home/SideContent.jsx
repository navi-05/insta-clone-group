import React from "react";
import SideContentItems from "./SideContentItems";
import { useUser } from "@clerk/clerk-react";

const demoUsers = [
  {
    userImg: "usdhifa",
    userName: "__naveen__",
    name: "Manikandan",
  },
  {
    userImg: "usdhifa",
    userName: "__naveen__",
    name: "Manikandan",
  },
  {
    userImg: "usdhifa",
    userName: "__naveen__",
    name: "Manikandan",
  },
  {
    userImg: "usdhifa",
    userName: "__naveen__",
    name: "Manikandan",
  },
  {
    userImg: "usdhifa",
    userName: "__naveen__",
    name: "Manikandan",
  },
];

const links = [
  "About",
  "Help",
  "Press",
  "API",
  "Jobs",
  "Privacy",
  "Terms",
  "Locations",
  "Language",
  "Meta Verified",
];

const SideContent = () => {
  const { user } = useUser();

  return (
    <div className="w-[320px] mt-9 flex flex-col pl-16 gap-y-4">
      <div>
        <SideContentItems
          userImg={user.imageUrl}
          userName="__gopal__"
          name={user.firstName + user.lastName}
        />
      </div>
      <div className="flex items-center justify-between text-xs text-gray font-medium">
        <p>Suggested for you</p>
        <p>See all</p>
      </div>

      <div className="flex flex-col gap-4">
        {demoUsers.map((u, i) => (
          <SideContentItems
            key={i}
            userImg={user.imageUrl}
            userName={u.userName}
            name={u.name}
          />
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-col gap-6 text-gray text-xs">
        <ul className="flex flex-wrap gap-1">
          {links.map((link, i) => (
            <li key={i} className="flex gap-2">
              <p>{link}</p>
              {i !== links.length - 1 && <span>•</span> }
            </li>
          ))}
        </ul>

        <div>© 2024 INSTAGRAM FROM META</div>
      </div>
    </div>
  );
};

export default SideContent;
