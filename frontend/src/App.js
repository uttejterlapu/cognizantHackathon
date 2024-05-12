import { Route, Routes , Navigate } from "react-router-dom";
import { Login, Signup , Pdf , Course, Profile} from "./pages";
import Home from "./pages/HomeMain";
import NotFound from "./pages/components/NotFound";
import Todo from "./pages/components/Todo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/todo" element={<Todo/>}/> 
        <Route path="/profile" element={<Profile/>}/> 
        <Route path="/course/:coursename" element={<Course />} />
        <Route path="/not-found" element={<NotFound/>}/>

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  );
}

export default App;