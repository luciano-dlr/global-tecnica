import styles from './table.module.scss'

export interface Props {
  tasks: {
    id: number;
    description: string;
    dueDate: string;
    completed: boolean;
    
  }[];
  toggleCompleted: (taskId: number) => void
}

export const Table = ({ tasks,toggleCompleted }: Props) => {


  return (

    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Task List
        </h1>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          {

            tasks && tasks.map(task => (

              <tr 
              key={task.id} 
              onClick={() => toggleCompleted(task.id)}
              className={task.completed ? styles.completed : styles.incomplete}
              >
                <td className={styles.tableCell}>
                  <input type='checkbox' className={styles.checkbox} checked={task.completed} readOnly/>
                </td>
                <td className={styles.tableCell} >{task.id}</td>
                <td className={styles.tableCell} >{task.description}</td>
                <td className={styles.tableCell} >{task.dueDate}</td>
                <td className={styles.tableCell} >{task.completed ? 'Completed' : 'Incomplete'}</td>
                
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  )
}


