"use client";
import EditorChat from "@/components/ui/editor/EditorChat";
import StatusChatIcon from "@/components/ui/icons/StatusChatIcon";
import { useSelectedContact } from "@/lib/hookStore";
import { TStatusChat } from "@/types/global";
import cn from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoSend } from "react-icons/io5";

export default function Chat() {
  const selectedContact = useSelectedContact((state) => state.selected);
  useEffect(() => {
    if (!selectedContact) return;
    const element = document.getElementById("conversation-chat");
    if (!element) return;
    element.scrollTop = element.scrollHeight;
  }, [selectedContact]);

  if (!selectedContact) return <></>;
  return (
    <>
      <div className="background inset-0 absolute"></div>
      <div className="flex flex-col justify-between h-full">
        <ConversationChat />
        <ChatInput />
      </div>
    </>
  );
}

const conversationList = [
  {
    chat_id: 1,
    side: "left",
    text: "Selamat Pagi, Sdr. Fikri Husni Mubaroq. Perkenalkan saya Rani dari Talent Acquisiton Vascomm. Kami telah menerima lamaran Anda dan kami terrtarik untuk memproses lebih lanjut. Apakah Anda masih tertarik dengan lowongan tersebut? Jika masih, silahkan mengisi Pre-Interview Form yang telah kami kirimkan melalui E-mail. ",
  },
  {
    chat_id: 2,
    side: "left",
    text: "Mohon segera konfirmasikan jika sudah mengisi form tersebut, melalui E-mail. Terima kasih. ",
  },
  {
    chat_id: 3,
    side: "right",
    text: "Saya sudah mengisi form tersebut, terima kasih atas informasinya",
    status: "read",
  },
  {
    chat_id: 4,
    side: "right",
    text: "Saya sudah mengisi form tersebut, terima kasih atas informasinya",
    status: "read",
  },
  {
    chat_id: 5,
    side: "left",
    text: "Baik, terimakasih atas konfirmasinya. Mohon ditunggu untuk informasi lebih lanjut akan kami segera hubungi kembali.",
  },
  {
    chat_id: 6,
    side: "right",
    text: "siap terimakasih",
    status: "read",
  },
  {
    chat_id: 7,
    side: "left",
    text: `Selamat siang, Kak. Kami telah menerima lamaran Anda dan kami tertarik untuk memproses lebih lanjut. Sebelumnya terimakasih telah mengisi Pre-Interview Form.  Untuk tahap selanjutnya adalah tahap interview yang akan dilaksanakan pada hari Rabu, 27 Maret 2024, pada pukul 13.15-13.30 WIB (Online). Apakah Anda dapat hadir pada jadwal tersebut?  Mohon konfirmasinya segera, kami tunggu. Terima kasih.`,
  },
  {
    chat_id: 8,
    side: "right",
    text: "Saya siap mengikuti tahap interview yg diadakan tanggal 27 Maret 2024 pukul 13.15 - 13.30 WIB",
    status: "read",
  },
  {
    chat_id: 9,
    side: "left",
    text: "Selamat siang, Kak. Kami telah menerima lamaran Anda dan kami tertarik untuk memproses lebih lanjut. Sebelumnya terimakasih telah mengisi Pre-Interview Form.  Untuk tahap selanjutnya adalah tahap interview yang akan dilaksanakan pada hari Rabu, 27 Maret 2024, pada pukul 13.15-13.30 WIB (Online).",
    image: "/images/woman-photo.jpg",
  },
];
function ConversationChat() {
  return (
    <div id="conversation-chat" className="fixed h-[calc(100%-120px)] w-[calc(100%-450px)] overflow-auto z-50 items-start justify-start flex flex-col py-5">
      {conversationList.map((conversation, key) => (
        <ConversationChatItem
          text={conversation.text}
          key={key}
          left={conversation.side === "left"}
          right={conversation.side === "right"}
          status={conversation.status}
          image={conversation.image}
        />
      ))}
    </div>
  );
}

function ConversationChatItem({
  left,
  right,
  status,
  image,
  text,
}: {
  left?: boolean;
  right?: boolean;
  status?: TStatusChat;
  image?: string;
  text?: string;
}) {
  return (
    <div
      className={cn(
        "  text-[#111b21] text-sm shadow-sm flex flex-col mb-1 mx-16 relative ",
        {
          "rounded-r-md rounded-b-md caret-chat-left bg-white ": left,
          "rounded-l-md rounded-b-md caret-chat-right bg-light-green justify-end ml-auto":
            right,
          "pl-2 pt-1 pb-2 !pr-12 max-w-[500px]": !image,
          "p-1.5 max-w-[330px]": image,
        }
      )}
    >
      {image && (
        <Image
          className="rounded-md mb-1.5"
          src={image}
          width={330}
          height={200}
          alt=""
        />
      )}
      <div
        className={cn("pr-2", {
          "pl-1": image,
        })}
      >
        {text}
      </div>
      <InfoChat time="19.28" status={status} />
    </div>
  );
}

function InfoChat({ time, status }: { time: string; status?: TStatusChat }) {
  return (
    <div className="absolute -bottom-0.5 right-1 items-center flex gap-x-1">
      <div className=" text-[10px] text-placeholder">{time}</div>
      {status && <StatusChatIcon status={status} />}
    </div>
  );
}

function ChatInput() {
  const [text, setText] = useState<string>("");
  return (
    <div className="py-3 w-[calc(100%-450px)] fixed shrink-0 items-center bg-light-gray z-50 bottom-0 flex gap-x-2 px-3">
      <div className="w-10 h-10 shrink-0 flex justify-center items-center cursor-pointer">
        <BiPlus size={26} color="#666" />
      </div>
      <EditorChat placeholder="Ketik pesan" value={text} onChange={setText} />
      <div className="w-10 h-10 flex justify-center items-center shrink-0">
        <IoSend size={24} color="#666" />
      </div>
    </div>
  );
}
