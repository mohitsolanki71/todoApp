import './App.css';
import {Todo} from "./components/todo";
import {Details} from "./components/details";
import {Navbar} from "./components/navbar";
import {EditTodo} from "./components/editTodo";
import {Login} from "./components/login";
import { PrivateRoute } from './components/privateRoute';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Login/>}></Route>

        <Route path="/todo" element={
          <PrivateRoute>
            <Todo/>
          </PrivateRoute>
        }></Route>

        <Route path="/todo/:id" element={
          <PrivateRoute>
            <Details/>
          </PrivateRoute>
        }></Route>
        
        <Route path="/todo/:id/edit" element={
          <PrivateRoute>
            <EditTodo/>
          </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
