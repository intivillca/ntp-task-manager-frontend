import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import TaskState from './context/task/TaskState'
import Main from './routes/Main'
import './App.css';
import TaskContext from './context/task/TaskContext';


const App = () => {
  return (
    <div className="container-fluid bg-light">
      <TaskContext>
      <Router>
        <Switch>
          <ProtectedRoute path="/" component={Main} exact />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      </TaskContext>
    </div>
  );
}

export default App;
