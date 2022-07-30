import React, { Component } from 'react'
import AppUserService from '../services/AppUserService'

class ViewAppUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            appuser: {}
        }
    }

    componentDidMount(){
        AppUserService.getuserById(this.state.id).then( res => {
            this.setState({appuser: res.data});
           
        })
        
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User Name: </label>
                            <div> {this.state.appuser.username}</div>
                        </div>
                        <div className = "row">
                            <label> password: </label>
                            <div> {this.state.appuser.password}</div>
                        </div>
                        <div className = "row">
                            <label> email: </label>
                            <div> {this.state.appuser.email}</div>
                        </div>
                        <div className = "row">
                            <label> age: </label>
                            <div>{this.state.appuser.age}</div>
                        </div>

                        <div className = "row">
                            <label> height: </label>
                            <div>{this.state.appuser.height}</div>
                        </div>

                        <div className = "row">
                            <label> weight: </label>
                            <div>{this.state.appuser.weight}</div>
                        </div>

                        <div className = "row">
                            <label> address: </label>
                            <div>{this.state.appuser.address}</div>

                        <div className = "row">
                            <label> phNo: </label>
                            <div>{this.state.appuser.phNo}</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewAppUserComponent