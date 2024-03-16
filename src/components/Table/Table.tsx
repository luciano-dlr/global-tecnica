import { Task } from '../../api/models/Task';
import { Dropdown } from '../Dropdown/Dropdown';
import styles from './table.module.scss'
import { useState } from 'react';

  interface Props {
  tasks: Task[];
  toggleCompleted: (taskId: number) => void
}

export const Table = ({ tasks, toggleCompleted }: Props) => {

  //ToDo
  //Ordenación por Fecha: Implementa la posibilidad de ordenar las tareas por fecha de creación o fecha de vencimiento

  const [filterStatus, setFilterStatus] = useState('All')
  const [filterAlphabetical, setFilterAlphabetical] = useState('A-Z')


  const handleFilterStatus = (task: Task) => {

    if (filterStatus === 'All') {
      return true
    } else if (filterStatus === 'Completed') {
      return task.completed
    } else {
      return !task.completed
    }

  }

  const handleFilterAlphabetical = (taskA: Task, taskB: Task) => {
    if (filterAlphabetical === 'A-Z') {
      return taskA.description.localeCompare(taskB.description);
    } else if (filterAlphabetical === 'Z-A') {
      return taskB.description.localeCompare(taskA.description);
    } else {
      return 0;
    }
  };

  const sortedTasks = [...tasks]
    .filter(handleFilterStatus)
    .sort(handleFilterAlphabetical);
 
    
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Task List Users</h1>
        </div>
  
        {/* Filtros */}
        <div className={styles.containerFilters}>
          <Dropdown
            options={[
              { value: 'All' },
              { value: 'Completed' },
              { value: 'Incomplete' },
            ]}
            onChange={(value) => setFilterStatus(value)}
          />
          <Dropdown
            options={[
              { value: 'Alphabetically' },
              { value: 'A-Z' },
              { value: 'Z-A' },
            ]}
            onChange={(value) => setFilterAlphabetical(value)}
          />
          <Dropdown
            options={[
              { value: 'Date' },
              { value: 'Oldest' },
              { value: 'Latest' },
            ]}
            onChange={(value) => setFilterStatus(value)}
          />
        </div>
  
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            {sortedTasks.map((task) => (
              <tr
                key={task.id}
                onClick={() => toggleCompleted(task.id)}
                className={
                  task.completed ? styles.completed : styles.incomplete
                }
              >
                <td className={styles.tableCell}>
                  <input
                    type='checkbox'
                    className={styles.checkbox}
                    checked={task.completed}
                  />
                </td>
                <td className={styles.tableCell}>{task.id}</td>
                <td className={styles.tableCell}>{task.description}</td>
                <td className={styles.tableCell}>{task.dueDate}</td>
                <td
                  className={`${styles.tableCell} ${
                    task.completed ? styles.completeText : styles.incompleteText
                  }`}
                >
                  {task.completed ? 'Completed' : 'Incomplete'}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  };
