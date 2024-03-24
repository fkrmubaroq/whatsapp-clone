"use client";
import { useSelectedContact } from "@/lib/hookStore";
import { ContactItemType, contactList } from "@/lib/mockData";
import Image from "next/image";
import { CSSProperties, Dispatch, SetStateAction, useRef, useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { DropdownOptions } from "./DropdownOptions";
import { DropdownOpenType, DropdownOptionItem } from "./types";

const dropdownActionList: DropdownOptionItem[] = [
  {
    name: "Arsipkan Chat",
  },
  {
    name: "Bisukan Notifikasi",
  },
  {
    name: "Keluar Dari Grup",
  },
  {
    name: "Sematkan Chat",
  },
  {
    name: "Tandai belum dibaca",
  },
];

const initOpen = {
  data: {},
  coordinate: { x: 0, y: 0 },
};
export default function ContactList() {
  const [open, setOpen] = useState<DropdownOpenType<ContactItemType>>();
  const setSelected = useSelectedContact(state => state.setSelected);
  const getPosition = (
    open: DropdownOpenType<ContactItemType>
  ): CSSProperties => {
    const windowHeight = window.innerHeight;
    if (open?.coordinate?.y + 230 > windowHeight) {
      return {
        top: `${open.coordinate.y - 230}px`,
        left: `${open.coordinate.x }px`,
      };
    }
    return {
      top: `${open.coordinate.y + 25}px`,
      left: `${open.coordinate.x - 10}px`,
    };
  };

  const onSelectContact = (data: ContactItemType) => {
    setSelected({
      id: data.id,
      name: data.name,
      conversationType: data.conversationType,
      image: data.image
    });
  }

  return (
    <div className="flex flex-col">
      {contactList.map((contact, key) => (
        <ContactItem
          key={key}
          data={contact}
          setOpen={setOpen}
          onSelectContact={onSelectContact}
        />
      ))}
      {open && (
        <DropdownOptions
          data={dropdownActionList}
          style={getPosition(open)}
          onHide={() => setOpen(undefined)}
          scrollId="wrapper-contacts"
        />
      )}
    </div>
  );
}

function ContactItem({
  data,
  setOpen,
  onSelectContact,
}: {
  data: ContactItemType;
  setOpen: Dispatch<
    SetStateAction<DropdownOpenType<ContactItemType> | undefined>
  >;
  onSelectContact: (data: ContactItemType) => void;
}) {
  const optionRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="flex h-[72px] relative hover:bg-gray-100 cursor-pointer group"
      onClick={() => onSelectContact(data)}
    >
      <div className="w-20 shrink-0 flex justify-center items-center ">
        <Image
          className="rounded-full"
          width={50}
          height={50}
          src={data.image}
          alt=""
        />
      </div>
      <div className="flex relative flex-col justify-center pr-3 w-full border-b border-b-gray-200">
        <div className="flex items-center">
          <div className="w-full">{data.name}</div>
          <div className="text-xs text-placeholder">Kemarin</div>
        </div>
        <div className="flex items-center">
          <div className="text-placeholder w-full text-sm mt-[-2px]">
            {data.last_chat}
          </div>
          {data?.unread && data.unread > 0 && (
            <BadgeUnread total={data.unread} />
          )}
          <div
            ref={optionRef}
            onClick={() => {
              const coordinate = optionRef.current?.getBoundingClientRect();
              setOpen({
                data,
                coordinate: { x: coordinate?.x || 0, y: coordinate?.y || 0 },
              });
            }}
            className="w-5 h-5 group-hover:opacity-100 ml-1 group-hover:mr-0 -mr-10 opacity-0 transition-all flex justify-center items-center"
          >
            <IoChevronDownSharp color="#667781" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BadgeUnread({ total }: { total: number }) {
  return (
    <div className="bg-primary mr-5 transition-all group-hover:mr-0 text-xs font-medium w-6 h-5 text-white flex justify-center items-center rounded-full">
      {total}
    </div>
  );
}
