export interface SearchbarType {
  id: string;
  placeholder: string;
  value?: string | number;
  onChange?: (value: any) => void;
}
