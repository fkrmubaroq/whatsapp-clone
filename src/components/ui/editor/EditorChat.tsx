import dataEmoji from "@/lib/dataEmoji";
import { useOnClickOutside } from "@/lib/hooks";
import { debounce, removeHtml } from "@/lib/utils";
import { EmojiGroupType, EmojiItemType } from "@/types/global";
import { useCallback, useMemo, useRef, useState } from "react";
import { ContentEditableEvent } from "react-contenteditable";
import Editor from "./Editor";

export default function EditorChat({
  value,
  onChange,
  ...props
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  }) {
  const caretPosition = useRef<number>(0);

  const onSelectEmoji = (emoji: string) => {
    const formatedText = removeHtml(value).split("");
    formatedText.splice(caretPosition.current, 0, emoji);
    onChange(formatedText.join(""));
  };

  const format = (text: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = text;
    const formatBold = (tempDiv.textContent || "").replace(
      /(\*[^*\s])(.*?)([^*\s]\*)/g,
      "<strong>$1$2$3</strong>"
    );
    const formatItalic = formatBold.replace(
      /(\_[^*\s])(.*?)([^*\s]\_)/g,
      "<i>$1$2$3</i>"
    );
    const formatStrikeThrough = formatItalic.replace(
      /(\~[^*\s])(.*?)([^*\s]\~)/g,
      "<s>$1$2$3</s>"
    );
    tempDiv.remove();
    return formatStrikeThrough;
  };

  const onChangeInput = (event: ContentEditableEvent) => {
    const formatedText = format(event.target.value);
    caretPosition.current = getCaretCharacterOffsetWithin(event.currentTarget);
    onChange(formatedText);
  };

const getCaretCharacterOffsetWithin = (
  element: HTMLElement | null
): number => {
  const doc = document as any;
  let caretOffset = 0;
  if (typeof window.getSelection !== "undefined") {
    const range = window.getSelection()?.getRangeAt(0);
    const preCaretRange = range?.cloneRange();
    preCaretRange?.selectNodeContents(element!);
    preCaretRange?.setEnd(range!.endContainer, range!.endOffset);
    caretOffset = preCaretRange?.toString().length ?? 0;
  } else if (
    typeof doc.selection !== "undefined" &&
    doc.selection.type !== "Control"
  ) {
    const textRange = doc.selection.createRange();
    const preCaretTextRange = doc.body.createTextRange();
    preCaretTextRange.moveToElementText(element!);
    preCaretTextRange.setEndPoint("EndToEnd", textRange);
    caretOffset = preCaretTextRange.text.length;
  }
  return caretOffset;
};

  return (
    <div className="relative bg-white rounded-lg w-full flex items-center pl-3">
      <Emoji onSelect={onSelectEmoji} />
      <Editor
        className="!rounded-none"
        value={value}
        onChange={onChangeInput}
        {...props}
      />
    </div>
  );
}

function SmileIcon({ fill }: { fill: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      height="24"
      width="24"
      version="1.1"
      x="0px"
      y="0px"
      enableBackground="new 0 0 24 24"
    >
      <path
        fill={fill}
        d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"
      ></path>
    </svg>
  );
}

function Emoji({ onSelect }: { onSelect: (emoji: string) => void }) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div className="cursor-pointer" onClick={() => setShow((o) => !o)}>
        <SmileIcon fill={show ? "#128c7e" : "#667781"} />
      </div>
      {show && (
        <ListEmoji
          onHide={() => setShow(false)}
          onSelect={onSelect}
        />
      )}
    </>
  );
}

function ListEmoji({
  onHide,
  onSelect,
}: {
  onHide: () => void;
  onSelect: (emoji: string) => void;
}) {
  const keywordRef = useRef<HTMLInputElement>(null);
  const emojiRef = useRef<HTMLDivElement>(null);
  const [debounceValue, setDebounceValue] = useState<EmojiGroupType>(dataEmoji);

  useOnClickOutside(emojiRef, () => {
    onHide();
  });
  const filterEmoji = useMemo(
    () =>
      debounce(() => {
        if (!keywordRef.current || !keywordRef.current?.value) return dataEmoji;
        const filter: EmojiGroupType = {};
        for (const name in dataEmoji) {
          filter[name] = dataEmoji[name].filter((emoji) =>
            emoji.name.includes(keywordRef.current?.value || "")
          );
        }
        setDebounceValue(filter);
      }),
    []
  );

  const debounceSearch = useCallback(() => filterEmoji(), [filterEmoji]);

  return (
    <div
      ref={emojiRef}
      className="absolute p-2 bg-white flex flex-col gap-y-3 shadow-md left-0 bottom-14 rounded-lg w-[360px]"
    >
      <div className="flex gap-x-2 "></div>
      <input
        ref={keywordRef}
        className="bg-gray-100 h-10 w-full rounded-md px-3 focus:outline-none"
        placeholder="Cari Emoji"
        onChange={debounceSearch}
      />
      <div className="overflow-auto h-[400px]">
        {Object.keys(debounceValue).map((name, key) => (
          <div key={key} className="flex flex-col gap-y-1">
            {debounceValue[name].length > 0 && (
              <div className="text-gray-500 text-sm mt-3 mb-1">{name}</div>
            )}
            <div className="grid grid-cols-8">
              {debounceValue[name].map((emoji, key) => (
                <EmojiItem key={key} data={emoji} onSelect={onSelect} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmojiItem({
  data,
  onSelect,
}: {
  data: EmojiItemType;
  onSelect: (emoji: string) => void;
}) {
  return (
    <div
      className="text-3xl hover:bg-gray-100 flex justify-center items-center cursor-pointer p-0.5 rounded-md"
      onClick={() => onSelect(data.emoji)}
    >
      {data.emoji}
    </div>
  );
}
