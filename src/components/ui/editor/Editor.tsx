import cn from "classnames";
import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

type EditorType = {
  className?: string;
  placeholder: string;
  value: string;
  onChange: (value: ContentEditableEvent) => void;
};
const Editor = React.forwardRef<HTMLDivElement, EditorType>(
  ({ onChange, placeholder, value, className }, ref) => {

    const handleInputChange = (event:ContentEditableEvent) => {
      onChange(event);
    };

    return (
      <div ref={ref}>
        <ContentEditable
          tagName="div"
          data-placeholder={placeholder}
          html={value}
          onChange={handleInputChange}
          className={cn(
            "w-full contenteditable overflow-auto text-[15px] bg-white rounded-lg editor outline-none py-2.5 px-3 max-h-[130px] min-h-10",
            className
          )}
        />
      </div>
    );
  }
);

Editor.displayName = "editor";

export default Editor;
