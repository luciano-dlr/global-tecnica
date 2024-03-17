import { DropdownProps } from './DropdownProps';
import styles from './dropdown.module.scss';

export const Dropdown = ({ setSelectedValue, title, options }: DropdownProps) => {

    const handleChange = (event: any) => {
        setSelectedValue({
            group: event.target.options[event.target.selectedIndex].parentNode.label,
            value: event.target.value
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.dropDownTitle}>{title}</div>
            <select
                className={styles.selectContainer}
                onChange={handleChange}
            >
                {
                    Object.keys(options).map((key: string) => {
                        return (
                            <optgroup label={key} key={key} data-group-name={key}>
                                {
                                    options[key].map((option) => (
                                        <option key={option.value + key} value={option.value}  >
                                            {option.label}
                                        </option>
                                    ))
                                }
                            </optgroup>
                        )
                    })
                }
            </select>
        </div>
    )
}


