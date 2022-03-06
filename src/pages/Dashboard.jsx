import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Dashboard({ tasks, onAdd, onDone }) {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  // redirects to Hello page if not logged in
  useEffect(() => {
    if(!user) {
      navigate('/hello')
    }
  }, [user, navigate])


  return (
    <div>
      <h1>Snacks</h1>
      <AddTask onAdd={onAdd} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDone={onDone} />
      ) : (
        "There is currently no tasks"
      )}
    </div>
  );
}

export default Dashboard;
