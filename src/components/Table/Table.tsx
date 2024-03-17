import { filterAlphabeticOptions, filterDueDateOptions, filterStatusOptions } from '../../utils/filtersList';
import { Dropdown } from '../Dropdown/Dropdown';
import { useController } from './Table.controller';
import { TableProps } from './TableProps';
import styles from './table.module.scss'

export const Table = ({ tasks, toggleTaskStatus }: TableProps) => {

  const { filteredTasks, handleFilterChange } = useController(tasks);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Lista de Tareas</h1>
      </div>
      <div className={styles.containerFilters}>
        <Dropdown
          options={filterStatusOptions}
          setOptionActive={value => handleFilterChange('status', value)}
        />
        <Dropdown
          options={filterAlphabeticOptions}
          setOptionActive={value => handleFilterChange('aplhabetical', value)}
        />
        <Dropdown
          options={filterDueDateOptions}
          setOptionActive={value => handleFilterChange('dueDate', value)}
        />
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          {filteredTasks.map((task) => (
            <tr
              key={task.id}
              onClick={() => toggleTaskStatus(task.id)}
              className={task.completed ? styles.completed : styles.incomplete}>
              <td className={styles.tableCell}>
                <input
                  type='checkbox'
                  className={styles.checkbox}
                  checked={task.completed}
                />
              </td>
              <td className={styles.tableCell}>{task.id}</td>
              <td className={styles.tableCell}>{task.description}</td>
              <td className={styles.tableCell}>{task.dueDate.toLocaleDateString('es')}</td>
              <td
                className={`${styles.tableCell} ${task.completed ? styles.completeText : styles.incompleteText}`}>
                {task.completed ? 'Completado' : 'Incompleto'}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};