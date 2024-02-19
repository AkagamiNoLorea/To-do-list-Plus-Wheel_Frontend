import {useState,useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const urltask= "http://localhost:8080/tasks"
const urlschedule = "http://localhost:8080/schedule"
const urllocalities = "http://localhost:8080/localities"
const urldifficulties = "http://localhost:8080/dificulties"

const SaveTask = () => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [idlocality, setIDLocality] = useState('');
  const [duration, setDuration] = useState('');
  const [iddifficulty, setIDDifficulty] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [localities, setLocalities] = useState([]);
  const [difficulties, setDifficulties] = useState([]);

const navigate = useNavigate()

const goBack = () => {
  navigate("/");
}

useEffect(() => {
  // Fetch localities from backend
  axios.get(urllocalities)
    .then(response => setLocalities(response.data))
    .catch(error => console.error('Error fetching localities:', error));

  // Fetch difficulties from backend
  axios.get(urldifficulties)
    .then(response => setDifficulties(response.data))
    .catch(error => console.error('Error fetching difficulties:', error));
}, []);

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    // Create a new task
    const taskResponse = await axios.post(urltask, {
      name: name,
      idlocality: idlocality,
      duration: duration,
      iddifficulty: iddifficulty,
    });

    // Create the entrance in the schedule
    await axios.post(urlschedule, {
      taskId: taskResponse.data.ID, // asumiendo que la respuesta de la creación de tarea incluye el ID
      date: date,
      isUrgent: isUrgent,
    });
  } catch (error) {
    console.error('Error creating task:', error);
  }
};

  return (
    <>
    <div className="form">
     <h2>Create a task</h2>
     <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Locality:
        <select value={idlocality} onChange={(e) => setIDLocality(e.target.value)}>
          <option value="">Select a locality</option>
          {localities.map(locality => (
            <option key={locality.ID} value={locality.ID}>{locality.Description}</option>
          ))}
        </select>
      </label>
      <label>
        Duration (minutes):
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </label>
      <label>
        Difficulty:
        <select value={iddifficulty} onChange={(e) => setIDDifficulty(e.target.value)}>
          <option value="">Select a difficulty</option>
          {difficulties.map(difficulty => (
            <option key={difficulty.ID} value={difficulty.ID}>{difficulty.Description}</option>
          ))}
        </select>
      </label>
      <label>
        Is it urgent?
        <select value={isUrgent} onChange={(e) => setIsUrgent(e.target.value === 'yes')}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </label>
      <button type="submit">Create Task</button>
      <button onClick={goBack}>Back</button>
    </form>
    </div>
    </>
   
  )
}

export default SaveTask