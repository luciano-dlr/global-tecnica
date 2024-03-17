export interface Option {
    value: string;
    label: string;
}

export interface DropdownProps {
    options: Option[];
    setOptionActive: (value:any) => void;
}