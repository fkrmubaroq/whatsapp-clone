export type ConversationType = "single" | "group";
export type EmojiItemType = {
  emoji: string;
  skin_tone_support: boolean;
  name: string;
  slug: string;
  unicode_version: string;
  emoji_version: string;
}
export type EmojiGroupType = {
  [key:string]: EmojiItemType[]
};

export type TStatusChat = "read" | "unread" | "pending";