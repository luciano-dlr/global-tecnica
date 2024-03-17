import { Navigate, Route, Routes } from "react-router-dom"
import { TaskList } from "../pages/TaskList/TaskList";

export const Navigation = () => {

    return (
        <Routes>
            <Route path="/task-list" element={<TaskList />} />
            <Route path="/*" element={<Navigate to="/task-list" />} />
        </Routes>
    )
}


