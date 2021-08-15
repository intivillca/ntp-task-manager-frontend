import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Main from './routes/Main'
import './App.css';

import TaskState from './context/tasks/TaskState';



const App = () => {
  return (
    <div className="container-fluid bg-light">
      <TaskState>
      <Router>
        <Switch>
          <ProtectedRoute path="/" component={Main} exact />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      </TaskState>
    </div>
  );
}

export default App;
