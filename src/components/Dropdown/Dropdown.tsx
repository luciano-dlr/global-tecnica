import styles from './dropdown.module.scss'


interface Option {
    value: string;
}

interface Props {

    options: Option[];
    onChange: (value: string) => void
    label?: string;
}


export const Dropdown = ({ options, onChange }: Props) => {


    const handleChange = (event: any) => {
        onChange(event.target.value);
    }


    return (
        <div className={styles.container}>
            
            <select 
            onChange={handleChange}
            className={styles.selectContainer}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    )
}


