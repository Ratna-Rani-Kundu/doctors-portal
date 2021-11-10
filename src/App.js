
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
     <Router>
     <Switch>
         <Route exact path="/">
               <Home />
           </Route>
         <Route exact path="/home">
               <Home />
           </Route>
          <Route exact path="/appointment">
            <Appointment/>
          </Route>
          <Route exact path="/login">
          <Login />
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
