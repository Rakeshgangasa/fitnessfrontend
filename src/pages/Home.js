import React from "react";
import "../style/Home.css";
import Footer from "./Footer";


class Home extends React.Component {
  render() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                <div class="logo">
                        <img src="fitnessLogo.webp" />
                    </div>
                    
                    <li><a href="#Activity">Activity</a></li>
                    <li><a href="#Diet">Diet</a></li>
                    <li><a href="#Report">Report</a></li>
                    <li><a href='#About'>About</a></li>
                </ul>
  
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-primary navbar-btn">Search</button>
                </div>
                </nav>
                <div
        className="body"
        style={{
          backgroundImage: `url("/2.jpg")`,
        }}
      ></div>
                </div>
 ) }
}
export default Home;
