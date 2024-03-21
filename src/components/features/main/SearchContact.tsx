import cn from "classnames";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDown } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import style from "./SearchContact.module.scss";

export default function SearchContact() {
  return (
    <div className="h-12 flex items-center px-3 gap-x-2">
      <SearchInput />
      <Filter />
    </div>
  );
}

function SearchInput() {
  return (
    <div className="relative w-full">
      <input
        className={cn(
          "bg-light-gray rounded-md pl-12 outline-none pr-2 h-9 w-full text-sm",
          style["search-input"]
        )}
        placeholder="Cari atau mulai chat baru"
      />
      <div
        className={cn(
          "absolute top-0 left-3 flex items-center h-9",
          style["icon-container"]
        )}
      >
        <AiOutlineSearch
          size={20}
          className={cn(style["search-icon"], "absolute")}
        />
        <IoMdArrowDown
          size={24}
          color="#128c7e"
          className={cn(style["arrow-icon"], "opacity-0 absolute")}
        />
      </div>
    </div>
  );
}

function Filter() {
  return <div className="w-9 h-9 cursor-pointer hover:bg-gray-200 rounded-md flex justify-center items-center">
    <IoFilterOutline size={20} />
  </div>;
}
