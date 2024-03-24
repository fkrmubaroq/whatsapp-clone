export type DropdownOptionItem = {
  name: string;
}
export type DropdownOptionsProps = {
  data: DropdownOptionItem[];
  onHide: () => void;
  scrollId?: string;
};

export type DropdownOpenType<TData> = {
  data: TData ;
  coordinate: { x: number; y:number };
}