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
import { UpdateTaskRoute } from './routes/UpdateTaskRoute';
import { AddTaskRoute } from './routes/AddTaskRoute';
import { DeleteTaskRoute } from './routes/DeleteTaskRoute';
import { StatusRoute } from './routes/StatusRoute';
import { CategoryRoute } from './routes/CategoryRoute';
import { PersonRoute } from './routes/PersonRoute';

library.add(fab, faTasks, faTrash, faUser, faHistory, faSitemap, faEdit, faFile, faSearch);

const App = (props) => {
  return (
    <div className="container-fluid bg-light">
      <ApiState>
        <LanguageState>
          <Router>
            <Switch>
              <ProtectedRoute path="/update/:taskId?" component={UpdateTaskRoute} exact />
              <ProtectedRoute path="/delete" component={DeleteTaskRoute} exact />
              <ProtectedRoute path="/add" component={AddTaskRoute} exact />
              <ProtectedRoute path="/status" component={StatusRoute} exact />
              <ProtectedRoute path="/category" component={CategoryRoute} exact />
              <ProtectedRoute path="/person" component={PersonRoute} exact />
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
