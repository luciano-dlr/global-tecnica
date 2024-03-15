import { useState } from 'react';
import { Table, Props as TableProps } from '../../components/Table/Table'; // Importa la interfaz Props del componente Table
import styles from './taskList.module.scss'


export const TaskList = () => {

   const [tasks, setTasks] = useState<TableProps['tasks']>([
    {
      id: 1,
      description: 'Sacar a pasear el perro',
      dueDate: '15/03/2024',
      completed: false,
    },
    {
      id: 2,
      description: 'Hacer la compra de alimento',
      dueDate: '16/03/2024',
      completed: false,
    },
   
  ]);

  const toggleCompleted = (taskId: number) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log("🚀 ~ toggleCompleted ~ updatedTasks:", updatedTasks)
  };

  return (

    <div className={styles.container}>

      <div>
     
      </div>
      <Table tasks={tasks} toggleCompleted={toggleCompleted} />

    </div>

  )
}


