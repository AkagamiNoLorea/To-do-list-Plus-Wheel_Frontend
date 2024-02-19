import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const url = "http://localhost:8080/tasks"
const DeleteTask = () => {

  const [task, setTask] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { taskId } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}/${taskId}`);
        setTask(response.data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchTask();
  }, [taskId]);

  const goBack = () => {
    navigate("/");
  }
  const handleDeleteTask = async () => {
    setIsLoading(true);
    try {
      await axios.delete(`${url}/${taskId}`);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="form">
        <h2>Deleting Task {task.name} </h2>
        <p>Are you sure?</p>
        <button onClick={handleDeleteTask}>Detele</button>
        <button type="button" onClick={goBack}>Back</button>
      </div>
    </div>
  );
};

export default DeleteTask;