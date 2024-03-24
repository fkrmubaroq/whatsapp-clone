import { PiArchiveBox } from "react-icons/pi";
export default function Archive() {
  return (
    <div className="h-12 w-full cursor-pointer flex gap-x-3 pl-3 items-center border-t border-t-gray-200">
      <div className="w-16 flex justify-center items-center">
      <PiArchiveBox size={24} color="#128c7e" />
      </div>
      <div className="flex items-center gap-x-2 w-full h-12 border-b pr-3 border-b-gray-200">
        <div className="  text-sm w-full">Diarsipkan</div>
        <div className="text-primary text-xs font-medium shrink-0 w-7 flex justify-center">
          2
        </div>
      </div>
    </div>
  );
}
