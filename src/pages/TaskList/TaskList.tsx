import { Table } from '../../components/Table/Table';
import styles from './taskList.module.scss'
import { useController } from './TaskList.controller';


export const TaskList = () => {

  const { tasks, toggleCompleted } = useController()

  return (

    <div className={styles.container}>

      <Table tasks={tasks} toggleCompleted={toggleCompleted} />

    </div>

  )
}


