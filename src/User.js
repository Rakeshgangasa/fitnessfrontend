import React from 'react';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'

import ListAppUserComponent from './Components/ListAppUserComponent';
import CreateAppUserComponent from './Components/CreateAppUserComponent';
import ViewAppUserComponent from './Components/ViewAppUserComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
function User() {
  return (
    <div>
        <Router>
             <HeaderComponent />
                <div className="container">
                    <Switch> 
                           <Route path = "/" exact component={ListAppUserComponent}></Route> 
                          <Route path = "/getuser" component={ListAppUserComponent}></Route>
                         <Route path = "/add-user/:id" component={CreateAppUserComponent}></Route>
                          <Route path = "/view-user/:id" component={ViewAppUserComponent} ></Route>
                         {/* <Route path = "/update-activity/:id" component={UpdateActivityComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default User;