export interface Option {
    value: string;
    label: string;
}

type Options= {
    [key:string]:Option[]
}


export interface DropdownProps {
    options: Options
    title:string;
    setSelectedValue: (value:{group:string,value:string}) => void;
    
}

