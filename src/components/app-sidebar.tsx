import React from "react";
import {
  HomeIcon,
  SettingsIcon,
  UserIcon,
  Calculator,
  Camera,
  LayoutGrid,
} from "lucide-react";

const sidebarItems = [
  { icon: <HomeIcon /> },
  { icon: <SettingsIcon /> },
  { icon: <UserIcon /> },
  { icon: <Calculator /> },
  { icon: <Camera /> },
  { icon: <LayoutGrid /> },
  { icon: <HomeIcon /> },
  { icon: <SettingsIcon /> },
 
];
const AppSidebar = () => {
  return (
    <div className="flex flex-col w-16  bg-yellow-700">
      <div className="h-16"></div>
      <hr  className="mx-2 bg-black text-black"/>
      <div className="flex flex-col gap-5 mt-2 justify-center ">
        {sidebarItems?.map((item, id) => (
          <div className="flex justify-center gap-5 cursor-pointer p-2 hover:bg-yellow-800 rounded-xl mx-2" key={id}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppSidebar;
