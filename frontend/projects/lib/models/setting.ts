export interface Setting {
  formControl: "Toggle" | "Select";
  title: string;
  items?: string[];
}