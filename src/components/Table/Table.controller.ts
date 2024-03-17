import { useMemo, useState } from "react";
import { Task } from "../../api/models/Task";

export const useController = (tasks: Task[]) => {

  //estado general de filtros
  const [filters, setFilters] = useState({
    status: undefined,
    aplhabetical: '',
    dueDate: '',
  })

  const filterTasks = () => {

    let filteredTasks = [...tasks]

    //Filter Status
    if (filters.status === 'completado') {
      filteredTasks = filteredTasks.filter(
        task => task.completed
      );
    }
    if (filters.status === 'incompleto') {
      filteredTasks = filteredTasks.filter(
        task => !task.completed
      );
    }
    //Filpter Aplhabetical
    if (filters.aplhabetical === 'ascendente') {
      filteredTasks.sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    }
    if (filters.aplhabetical === 'descendente') {
      filteredTasks.sort((a, b) =>
        b.description.localeCompare(a.description)
      );
    }
    //Filter dueDate
    if (filters.dueDate === 'ascendente') {
      filteredTasks.sort((a, b) =>
        a.dueDate.getTime() - b.dueDate.getTime()
      );
    }
    if (filters.dueDate === 'descendente') {
      filteredTasks.sort((a, b) =>
        b.dueDate.getTime() - a.dueDate.getTime()
      );
    }

    return filteredTasks;

  }

  const filteredTasks = useMemo(() => filterTasks(), [tasks, filters])

  const handleFilterChange = (filterName: any, value: any) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return {
    filteredTasks,
    setFilters,
    handleFilterChange
  }
}