import { useOnClickOutside } from "@/lib/hooks";
import cn from "classnames";
import { useEffect, useRef } from "react";
import { DropdownOptionsProps } from "./types";
export function DropdownOptions({
  onHide,
  data,
  className,
  style,
  scrollId,
}: React.ComponentPropsWithoutRef<"div"> & DropdownOptionsProps) {
  const divRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(divRef, () => {
    onHide();
  });
  useEffect(() => {
    if (!scrollId) return;

    const element = document.getElementById(scrollId);
    element?.classList.remove("overflow-auto");
    return () => {
      element?.classList.add("overflow-auto");
    }
  }, [scrollId]);
  return (
    <div
      ref={divRef}
      style={style}
      className={cn(
        "bg-white shadow-md absolute top-10 right-3 w-[200px] py-2 z-[999] ",
        className
      )}
    >
      {data.map((action, key) => (
        <div
          key={key}
          className="flex cursor-pointer items-center text-sm h-10 px-6 hover:bg-gray-100"
        >
          {action.name}
        </div>
      ))}
    </div>
  );
}
