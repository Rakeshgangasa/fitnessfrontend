import React, { Component } from 'react'
import AppUserService from '../services/AppUserService';

class UpdateAppUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userid: this.props.match.params.id,
            UserName:'',
            password:'',
            email:'',
            age:'',
            height:'',
            weight:'',
            address:'',
            phNo:'',
        }
        this.changeuseridHandler = this.changeuseridHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changeemailHandler=this.changeemailHandler.bind(this);
        this.changeageHandler = this.changeageHandler.bind(this);
        this.changheightHandler = this.changheightHandler.bind(this);
        this.changweightHandler= this.changweightHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changephNoHandler=this.changephNoHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        AppUserService.getuserByid(this.state.id).then( (res) =>{
            let appuser = res.data;
            this.setState({userid: appuser.userid,
                UserName: appuser.UserName,
                password : appuser.password,
                email:appuser.email,
                age:appuser.age,
                height:appuser.height,
                weight:appuser.weight,
                address:appuser.address,
                phNo:appuser.phNo
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let appuser = {userid: this.state.userid, UserName: this.state.UserName,password:this.state.password, email: this.state.email,age:this.state.age,height:this.state.height,weight:this.state.weight,address:this.state.address,phNo:this.state.phNo};
        console.log('appuser => ' + JSON.stringify(appuser));
        console.log('id => ' + JSON.stringify(this.state.userid));
        AppUserService.updateUser(appuser).then( res => {
            this.appuser=res.data;
            this.props.history.push('/getuser');
        });
    }
    
    changeuseridHandler= (event) => {
        this.setState({userid: event.target.value});
    }

    changeUserNameHandler= (event) => {
        this.setState({UserName: event.target.value});
    }

    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeemailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeageHandler= (event) => {
        this.setState({age: event.target.value});
    }
    changheightHandler= (event) => {
        this.setState({height: event.target.value});
    }

    changweightHandler= (event) => {
        this.setState({weight: event.target.value});
    }

    changeaddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changephNoHandler= (event) => {
        this.setState({phNo: event.target.value});
    }
    cancel(){
        this.props.history.push('/getuser');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update user</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> userid: </label>
                                            <input  name="userid" className="form-control" 
                                                value={this.state.userid} />
                                        </div>
                                        <div className = "form-group">
                                            <label> UserName: </label>
                                            <input placeholder="User Name" name="UserName" className="form-control" 
                                                value={this.state.UserName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> password: </label>
                                            <input placeholder="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>email: </label>
                                            <input placeholder="email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeemailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>age: </label>
                                            <input placeholder="age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeageHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>height: </label>
                                            <input placeholder="height" name="height" className="form-control" 
                                                value={this.state.height} onChange={this.changheightHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>weight: </label>
                                            <input placeholder="weight" name="weight" className="form-control" 
                                                value={this.state.weight} onChange={this.changweightHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>address: </label>
                                            <input placeholder="address" name="addresss" className="form-control" 
                                                value={this.state.address} onChange={this.changeaddressHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>phNo: </label>
                                            <input placeholder="phNo" name="phNo" className="form-control" 
                                                value={this.state.phNo} onChange={this.changephNoHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateAppUserComponent