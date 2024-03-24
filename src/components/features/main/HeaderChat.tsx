"use client";
import { useSelectedContact } from "@/lib/hookStore";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";

export default function HeaderChat() {
  const selectedContact = useSelectedContact((state) => state.selected);
  if (!selectedContact) return <></>;
  return (
    <div className="flex justify-between gap-x-4 px-4 h-[60px] items-center bg-light-gray border-l border-l-gray-200">
      <div className="flex gap-x-4 items-center">
        <Image
          src={selectedContact.image}
          width={40}
          height={40}
          alt=""
          className="rounded-full"
        />
        <div className="flex flex-col">
          <div className="text-sm">{selectedContact.name}</div>
          <div className="text-gray-500 text-xs">
            klik disini untuk melihat info kontak
          </div>
        </div>
      </div>

      <Action />
    </div>
  );
}

const actionList = [
  {
    name: "search",
    icon: <AiOutlineSearch color="#54656f" size={22} />,
  },
  {
    name: "options",
    icon: <SlOptionsVertical color="#54656f" size={16} />,
  },
];
function Action() {
  return (
    <div className="flex gap-x-2">
      {actionList.map((action, key) => (
        <div
          className="w-9 h-9 cursor-pointer rounded-md flex justify-center items-center"
          key={key}
        >
          {action.icon}
        </div>
      ))}
    </div>
  );
}
