import { Navigate, Route, Routes } from "react-router-dom"
import { TaskList } from "../pages/TaskList/TaskList";

export const Navigation = () => {

    //Controlar al usuario en las rutas
    return (
        <Routes>
            <Route path="/task-list" element={<TaskList />} />
            <Route path="/*" element={<Navigate to="/task-list" />} />
        </Routes>
    )
}


