import { ConversationType } from "@/types/global";
import { create } from "zustand";

type SelectedContactType = {
  id: number;
  name: string;
  conversationType: ConversationType | "";
  image: string;
}
type SelectedContactStore = {
  selected: SelectedContactType | undefined;
  setSelected: (selected: SelectedContactType) => void;
}

export const useSelectedContact = create<SelectedContactStore>((set) => ({
  selected: undefined,
  setSelected: (selected: SelectedContactType) => set(() => ({ selected })),
}));