import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import CardTask from "./CardTask"


const url = "http://localhost:8080/tasks"
const ShowTasks = () => {

  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllTasks()
  }, [])
 

  const getAllTasks = async () => {
    const response = await axios.get(url)
    let data = response.data;
    setTasks(data);
  }

  // create, read, delete 

  const handleDeleteTask = (task) => {    
    navigate(`/delete/${task.id}`);
  };

  const cards = tasks.map((task) => <CardTask 
                                                        key = {task.id} 
                                                        character = {task} 
                                                        deleteTask = { handleDeleteTask }
                                                      /> );
  
  return (
    <>
      <div className="box">
        { 
          cards
        }
      </div>
    </>
  )
}

export default ShowTasks