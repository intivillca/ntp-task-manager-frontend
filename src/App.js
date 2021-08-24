import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Main from './routes/Main'
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTasks, faTrash, faUser, faHistory, faSitemap, faEdit, faFile, faSearch } from '@fortawesome/free-solid-svg-icons'

import ApiState from './context/api/apiState';
import LanguageState from './context/language/languageState';
import { AddTask } from './components/tasks/AddTask';
import { DeleteTask } from './components/tasks/DeleteTask';
import { UpdateTask } from './components/tasks/UpdateTask';

library.add(fab, faTasks, faTrash, faUser, faHistory, faSitemap, faEdit, faFile, faSearch);

const App = () => {
  return (
    <div className="container-fluid bg-light">
      <ApiState>
        <LanguageState>
          <Router>
            <Switch>
              <ProtectedRoute path="/update/:taskId?" component={UpdateTask} exact />
              <ProtectedRoute path="/delete" component={DeleteTask} exact />
              <ProtectedRoute path="/add" component={AddTask} exact />
              <ProtectedRoute path="/" component={Main} exact />
              <Route path="/login" component={Login} />
            </Switch>
          </Router>
        </LanguageState>
      </ApiState>
    </div>
  );
}

export default App;
