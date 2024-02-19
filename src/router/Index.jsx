import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SaveTask from "../components/tasks/SaveTask";
import DeleteTask from "../components/tasks/DeleteTask";

export const router = createBrowserRouter([
    {
        path: "/createtask",
        element: <SaveTask/>
    },
    {
        path: "/delete/:taskId",
        element: <DeleteTask/>
    },
    {
        path: "/localities",
        element: <ShowLocalities/>
    },
    {
        path: "/createtask",
        element: <SaveLocality/>
    },
    {
        path: "/",
        element: <Home/>
    }
])
