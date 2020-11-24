import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./component/user/ListUserComponent";
import AddUserComponent from "./component/user/AddUserComponent";
import EditUserComponent from "./component/user/EditUserComponent";


import ListEmpComponent from "./component/employee/ListEmpComponent";
import AddEmpComponent from "./component/employee/AddEmpComponent";
import EditEmpComponent from "./component/employee/EditEmpComponent";

import ListEmpTrComponent from "./component/employee/ListEmpTrComponent";
import AddEmpTrComponent from "./component/employee/AddEmpTrComponent";
import NewTrComponent from "./component/employee/NewTrComponent";


function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>OM SRI RAM</h1>
                  <Switch>
                      <Route path="/" exact component={ListEmpTrComponent} />
                      <Route path="/users" component={ListUserComponent} />
                      <Route path="/add-user" component={AddUserComponent} />
                      <Route path="/edit-user" component={EditUserComponent} />
                      <Route path="/employees" component={ListEmpComponent} />
                      <Route path="/add-employee" component={AddEmpComponent} />
                      <Route path="/edit-employee" component={EditEmpComponent} />
                      <Route path="/employee-trs" component={ListEmpTrComponent} />
                      <Route path="/add-employee-tr" component={AddEmpTrComponent} />
                      <Route path="/new-tr" component={NewTrComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;