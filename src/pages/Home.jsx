
import { NavLink } from "react-router-dom"
import ShowTasks from "../components/tasks/ShowTasks";


const Home = () => {
  return (
    <div>
      <header>
        <h1>Your list of tasks</h1>
        <W/>
        <NavLink to ="/create ">
            <button>Add task</button></NavLink></header>
        <ShowTasks />
    </div>
  )
}

export default Home;