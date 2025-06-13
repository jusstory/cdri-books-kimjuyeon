export interface SearchbarType {
  id: string;
  className?: string;
  placeholder: string;
  value?: string | number;
  onChange?: (value: any) => void;
  onKeyDown?: (e: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
