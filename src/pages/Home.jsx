
import { NavLink } from "react-router-dom"
import ShowTasks from "../components/ShowCharacters";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Your list of tasks</h1>
        <NavLink to ="/create ">
            <button>Add task</button></NavLink></header>
        <ShowTasks />
    </div>
  )
}

export default Home;