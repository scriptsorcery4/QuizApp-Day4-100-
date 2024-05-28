import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/auth/Login"
import Singup from "./pages/auth/Singup"
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import FindQuiz from './pages/FindQuiz'
import { useAuthContext } from "./hooks/useAuthContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const { user } = useAuthContext();
  return (
    <>
    <ToastContainer />
     <BrowserRouter>
        
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quiz/:id" element={user ? <Quiz /> : <Navigate to="/login" />}/>
        <Route path="/quizzes" element={<FindQuiz/>}/>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}/>
        <Route path="/singup" element={!user ? <Singup /> : <Navigate to="/" />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
