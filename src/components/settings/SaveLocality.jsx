import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const url = "http://localhost:8080/localities"

const SaveLocality = () => {

    const navigate = useNavigate();

    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

const goBack = () => {
  navigate("/localities");
}
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(url, {description});
            navigate('/localities');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Save Locality</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Description:</label>
                    <input
                        type="text" id="description" value={description} onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <button type="submit">Save Locality</button>
                <button onClick={goBack}>Go Back</button>
            </form>
        </div>
    );
}
export default SaveLocality