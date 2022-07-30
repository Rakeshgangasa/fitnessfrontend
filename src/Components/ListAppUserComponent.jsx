import React, { Component } from 'react'
import AppUserService from '../services/AppUserService'
import { Route , history} from 'react-router-dom';

class ListAppUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                appuser: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        AppUserService.deleteUser(id).then( res => {
            this.setState({appuser: this.state.appuser.filter(appuser => appuser.id !== id) });
            
        });
    }
    viewUser(id){
        this.props.history.push(`/view-appuser/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-appuser/${id}`);
    }

    componentDidMount(){
        AppUserService.getuser().then((res) => {
            this.setState({ appuser: res.data});
        });
    }
    addUser(){
        this.props.history.push('/add-appuser/_add');
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">AppUser List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>User id</th>
                                    <th> AppUser UserName</th>
                                    <th> AppUser password</th>
                                    <th> AppUser email</th>
                                    <th> AppUser age</th>
                                    <th> AppUser height</th>
                                    <th> AppUser weight</th>
                                    <th> AppUser address</th>
                                    <th> AppUser phNo</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.appuser.map(
                                        appuser => 
                                        <tr key = {appuser.userid}>
                                            <td> { appuser.userid} </td> 
                                             <td> { appuser.UserName} </td>   
                                             <td> {appuser.password}</td>
                                             <td> {appuser.email}</td>
                                             <td> {appuser.age}</td>
                                             <td> {appuser.height}</td>
                                             <td> {appuser.weight}</td>
                                             <td> {appuser.address}</td>
                                             <td> {appuser.phNo}</td>
                                             <td> {appuser.tech}</td>
                                             
                                             <td>
                                                 <button onClick={ () => this.editUser(appuser.userid)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(appuser.userid)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(appuser.userid)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    ) }
                            </tbody>
                        </table>
                 </div> </div>
        )
    }
}

export default ListAppUserComponent