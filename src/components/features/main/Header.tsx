"use client"
import { Dispatch, SetStateAction, useState } from "react";
import { PiCircleDashedBold } from "react-icons/pi";
import { RiChatNewLine } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { TbUsersGroup } from "react-icons/tb";
import { DropdownOptions } from "./DropdownOptions";
import { DropdownOptionItem } from "./types";

type ActionNameType = "group-community" | "status" | "new-chat" | "options";
type ActionListType = {
  name: ActionNameType;
  icon: React.ReactNode;
}
const actionList: ActionListType[] = [
  {
    name: "group-community",
    icon: <TbUsersGroup size={24} />,
  },
  {
    name: "status",
    icon: <PiCircleDashedBold size={24} />,
  },
  {
    name: "new-chat",
    icon: <RiChatNewLine size={24} />,
  },
  {
    name: "options",
    icon: <SlOptionsVertical size={17} />,
  },
];


const dropdownActionList:DropdownOptionItem[] = [
  {
    name: "Grup Baru",
  },
  {
    name: "Pesan Berbintang",
  },
  {
    name: "Pilih Chat",
  },
  {
    name: "Pengaturan",
  },
  {
    name: "Keluar",
  },
];


export default function Header() {
  const [activeMenu, setActiveMenu] = useState<ActionNameType>();

  return (
    <div className="bg-light-gray flex justify-between items-center py-[10px] px-4 h-[60px]">
      <Avatar />
      <Actions data={actionList} setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
    </div>
  );
}

function Avatar() {
  return <div className="w-10 h-10 bg-gray-300 rounded-full">

  </div>
}


function Actions({
  data,
  setActiveMenu,
  activeMenu,
}: {
  data: ActionListType[];
  setActiveMenu: Dispatch<SetStateAction<ActionNameType | undefined>>;
  activeMenu: ActionNameType | undefined;
}) {
  return (
    <div className="flex gap-x-3">
      {data.map((action, key) => {
        const optionIsClicked = activeMenu === "options" && action.name === "options"; 
        return (
          <div
            onClick={() => setActiveMenu(action.name === activeMenu ? undefined : action.name)}
            className="w-10 h-10 relative cursor-pointer flex justify-center items-center hover:bg-gray-300 rounded-md"
            key={key}
          >
            {action.icon}
            {optionIsClicked && <DropdownOptions data={dropdownActionList} />}
          </div>
        );
      })}
    </div>
  );
}
