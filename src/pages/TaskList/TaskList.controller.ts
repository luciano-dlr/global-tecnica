import { useState } from "react";
import { Task } from "../../api/models/Task";
import { Tasks } from "../../api/data/data";

export const useController = () => {

  const [tasks, setTasks] = useState<Task[]>(Tasks);

  const toggleCompleted = (taskId: number) => {

    setTasks(currentState => currentState.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }))

  };


  return {
    toggleCompleted,
    tasks
  }
}

