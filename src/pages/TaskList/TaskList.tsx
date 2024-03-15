import { Table } from '../../components/Table/Table'
import styles from './taskList.module.scss'


export const TaskList = () => {



  return (

    <div className={styles.container}>

      {/* <div className={styles.textExample}>Soy la tecnica leio</div> */}
      <Table/>

    </div>

  )
}


