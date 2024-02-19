import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SaveTask from "../components/tasks/SaveTask";
import DeleteTask from "../components/tasks/DeleteTask";

export const router = createBrowserRouter([
    {
        path: "/create",
        element: <SaveTask/>
    },
    {
        path: "/delete/:taskId",
        element: <DeleteTask/>
    },
    {
        path: "/",
        element: <Home/>
    }
])
