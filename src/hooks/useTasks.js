import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/tasks";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try{
      const response = await fetch(API_URL, {
        
          method:"POST",
          headers: {
            "Content-Type": "json",
          },
          body: JSON.stringify(task),
        }
      )

      if(!response.ok) {
        throw Error("Failed to add task")
      }

      const newTask = await response.json()

      setTasks((prev) => [...prev, newTask])
    } catch (err) {
      setError(err.message || "Something went wrong")
    }
  }
  return {
    tasks,
    loading,
    error,
    addTask,
    setTasks,
  };
}
