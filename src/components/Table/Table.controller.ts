import { useMemo, useState } from "react";
import { Task } from "../../api/models/Task";

export const useController = (tasks: Task[]) => {

  const [selectedValue, setSelectedValue] = useState<{ group: string; value: string } | undefined>();

  const [selectedValueState, setSelectedValueState] = useState<{ group: string; value: string } | undefined>();

  const filterTasks = () => {

    let filteredTasks = [...tasks]

    //Filter Status
    if (selectedValueState?.group === 'estado') {
      if (selectedValueState.value === 'completado') {
        filteredTasks = filteredTasks.filter(
          task => task.completed
        );
      }
      if (selectedValueState.value === 'incompleto') {
        filteredTasks = filteredTasks.filter(
          task => !task.completed
        );
      }
    }

    //Filter Alphabetical
    if (selectedValue?.group === 'descripcion') {
      if (selectedValue.value === 'ascendente') {
        filteredTasks.sort((a, b) =>
          a.description.localeCompare(b.description)
        );

      }
      if (selectedValue.value === 'descendente') {
        filteredTasks.sort((a, b) =>
          b.description.localeCompare(a.description)
        );
      }
    }

    //Filter dueDate
    if (selectedValue?.group === 'vencimiento') {
      if (selectedValue.value === 'ascendente') {
        filteredTasks.sort((a, b) =>
          a.dueDate.getTime() - b.dueDate.getTime()
        );
      }
      if (selectedValue.value === 'descendente') {
        filteredTasks.sort((a, b) =>
          b.dueDate.getTime() - a.dueDate.getTime()
        );
      }
    }

    return filteredTasks;
  }

  const filteredTasks = useMemo(() => filterTasks(), [tasks, selectedValue, selectedValueState])

  return {
    filteredTasks,
    setSelectedValueState,
    setSelectedValue
  }
}
