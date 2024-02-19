import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import CardLocality from "./CardLocality";



const url = "http://localhost:8080/localities"
const ShowLocalities = () => {

  const [localities, setLocalities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllLocalities()
  }, [])
 

  const getAllLocalities = async () => {
    const response = await axios.get(url)
    let data = response.data;
    setLocalities(data);
  }

  // create, read, delete 

  const handleDeleteLocality = (locality) => {    
    navigate(`/delete/${locality.id}`);
  };

  const cards = localities.map((locality) => <CardLocality 
                                                        key = {locality.id} 
                                                        locality = {locality} 
                                                        deleteLocality = { handleDeleteLocality }
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

export default ShowLocalities