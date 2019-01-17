export interface FormControlOption {
  value: string | number;
  label: string;
}

export interface FormControlInput {
  type: string;
  placeholder: string;
  options?: FormControlOption[];
}
