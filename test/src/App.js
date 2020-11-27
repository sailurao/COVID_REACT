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
import EmpAlert1 from "./component/employee/EmpAlert1";
import EmpAlert2 from "./component/employee/EmpAlert2";


import pdi_img from './images/pdi_logo.png'; // gives image path
import styles from './App.css'; 

function App() {
 const h2Style = {
        marginLeft: '160px',
      };    
  return (
      <div className="container">
          <Router>
							<div className="form-group">
              </div>
              <div className="col-md-6">
	                <table className="table table-striped">
										<tr>
	                    <td>  </td>
	                     <td>  </td>
	                    <td>
													{/*<h1 className="text-center" style={style}>OM SRI RAM</h1>*/}			
													<img src={pdi_img} alt="this is PDI image" style={h2Style}/>
                      </td>
                    </tr>
                   </table>
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
                      <Route path="/empalrt1" component={EmpAlert1} />
                      <Route path="/empalrt2" component={EmpAlert2} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    marginleft: '100px'
}

export default App;
