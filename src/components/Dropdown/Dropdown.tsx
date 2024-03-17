import { DropdownProps } from './DropdownProps';
import styles from './dropdown.module.scss'

export const Dropdown = ({ options, setOptionActive }: DropdownProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.dropDownTitle}></div>
            <select
                onChange={(event) => {
                    setOptionActive(event.target.value)
                }}
                className={styles.selectContainer}>
                {options.map(option => (
                    <option key={option.value} value={option.value} >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}


