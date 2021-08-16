import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Main from './routes/Main'
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTasks, faTrash, faUser, faExclamationCircle,faSitemap, faEdit, faFile } from '@fortawesome/free-solid-svg-icons'

import TaskState from './context/tasks/TaskState';
import LanguageState from './context/language/languageState';

library.add(fab, faTasks, faTrash, faUser, faExclamationCircle,faSitemap, faEdit, faFile);

const App = () => {
  return (
    <div className="container-fluid bg-light">
      <TaskState>
      <LanguageState>
      <Router>
        <Switch>
          <ProtectedRoute path="/" component={Main} exact />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      </LanguageState>
      </TaskState>
    </div>
  );
}

export default App;
