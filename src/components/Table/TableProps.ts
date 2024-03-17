import { Task } from "../../api/models/Task";

export interface TableProps {
    tasks: Task[];
    toggleTaskStatus:(taskId:number) => void;
  }