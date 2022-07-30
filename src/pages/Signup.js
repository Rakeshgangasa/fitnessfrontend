import React from "react";
import "../style/demo.css";
import Footer from "./Footer";
import Header from "./Header";
import { useHistory } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      UserName:'',
      password:'',
      email:'',
      age:'',
      height:'',
      weight:'',
      address:'',
      phNo:'',
      
    }
  }
    onchangeUserName=(event)=>{
      this.setState({name:event.target.value}
        )
    }
    onchangepassword=(event)=>{
      this.setState({password:event.target.value}
        )
    }
    onchangeemail=(event)=>{
      this.setState({email:event.target.value}
        )
    }
    onchangeage=(event)=>{
      this.setState({age:event.target.value}
        )
    }
    onchangeheight=(event)=>{
      this.setState({height:event.target.value}
        )
    }
    onchangeweight=(event)=>{
      this.setState({weight:event.target.value}
        )
    }
    onchangePhNo=(event)=>{
      this.setState({phNo:event.target.value}
        )
    }
    onchangeaddress=(event)=>{
      this.setState({address:event.target.value}
        )
    }
    onchangeSubmit=(event)=>{
      this.props.history.push('/')
    } 
      onchangeSubmit=(event)=>{
        console.log("its running");
        let databody = {
          message: this.state.val,
        };
        console.log(" the message is :" + databody.message);
        console.log(" the message is :" + this.state.val);
        return fetch("http://localhost:9091/user/adduser", {
          method: "POST",
          body: JSON.stringify(databody),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) =>{ console.log(data);
          this.props.history.push('/');})

      }; 
    
  render() {
    return (
      <div
        className="body"
        style={{
          backgroundImage: `url("/78.jpg")`,
        }}
      >
        <Header />
        <form className="forms1">
          <h1 className="head1 p-5" title="Enter fields">
            Create New account
          </h1>
          <div className="input-group-login sombreado-input" title="Name">
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>
            <input
              type="text"
              className="border-0-login form-control-login input-border-none"
              placeholder="Name"
              name="" 
              onChange={
                this.onchangeUserName
              }
            />
          </div>

          <div className="input-group-login sombreado-input" title="email">
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-envelope-open" aria-hidden="true"></i>
              </span>
            </div>
            <input
              type="email"
              class="border-0-login form-control-login input-border-none"
              placeholder="email"
              name="email" onChange={
                this.onchangeemail
              }
            />
          </div>
          <div className="input-group-login sombreado-input" title="age">
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-key" aria-hidden="true"></i>
              </span>
            </div>
            <input
              type="age"
              className="border-0-login form-control-login input-border-none"
              placeholder="age" onChange={
                this.onchangeage
              }
            />
          </div>
          <div className="input-group-login sombreado-input" title="height">
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-key" aria-hidden="true"></i>
              </span>
            </div>
            <input
              type="height"
              className="border-0-login form-control-login input-border-none"
              placeholder="height" onChange={
                this.onchangeheight
              }
            />
          </div>
          <div className="input-group-login sombreado-input" title="weight">
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-key" aria-hidden="true"></i>
              </span>
            </div>
            <input
              type="weight"
              className="border-0-login form-control-login input-border-none"
              placeholder="weight" onChange={
                this.onchangeweight
              }
            />
          </div>
          <div className="input-group-login sombreado-input" title="address">
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-key" aria-hidden="true"></i>
              </span>
            </div>
            <input
              type="address"
              className="border-0-login form-control-login input-border-none"
              placeholder="address" onChange={
                this.onchangeaddress
              }
            />
          </div>
          <div
            className="input-group-login sombreado-input"
            title="Mobile Number"
          >
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-address-book" aria-hidden="true"></i>
              </span>
            </div>
            <input
              type="tel"
              className="border-0-login form-control-login input-border-none"
              placeholder="Mobile number"
              name="mobileNumber" onChange={
                this.onchangePhNo
              }
            />
          </div>

        
          <div className="input-group-login sombreado-input" title="Gender">
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-child" aria-hidden="true"></i>
              </span>
            </div>

            <select className="border-0-login form-control-login input-border-none">
              <option value="">None</option>
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
          <div className="input-group-login sombreado-input" title="password">
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-key" aria-hidden="true"></i>
              </span>
            </div>
            <input
              type="password"
              className="border-0-login form-control-login input-border-none"
              placeholder="password" onChange={
                this.onchangepassword
              }
            />
          </div>
        
          <div className="input-group-login sombreado-input">
            <div className="input-group-prepend-login">
              <span className="input-group-text fondo-icon">
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </span>
            </div>

            <select
              className="border-0-login form-control-login input-border-none"
              title="login as"
            >
              <option value="">None</option>
              <option value="">User</option>
              <option value="">Admin</option>
              
            </select>
          </div>

          <p className="text-center" title="to register">
            <button className="button-signup fondo-color-signup" onSubmit={this.onchangeSubmit}>
            <a href="/Home" target="_blank" className="">
              <strong>Register</strong></a>
            </button>
            
          </p>

          <a href="/signin" target="_blank">
            <label for="">login</label>
          </a>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Signup;