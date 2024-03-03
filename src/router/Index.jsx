import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SaveTask from "../components/tasks/SaveTask";
import DeleteTask from "../components/tasks/DeleteTask";
import SaveLocality from "../components/settings/SaveLocality";
import Localities from "../pages/Localities";
import Wheel from "../components/wheel/Wheel";
import Deadline from "../pages/Deadline";

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
        path: "/deadline",
        element: <Deadline/>
    },
    {
        path: "/wheel",
        element: <Wheel/>
    },
    {
        path: "/localities",
        element: <Localities/>
    },
    {
        path: "/createlocality",
        element: <SaveLocality/>
    },
    {
        path: "/",
        element: <Home/>
    }
])
