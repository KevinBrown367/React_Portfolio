import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "../assets/profile.png";
import Title from "./Title";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    // Never modify the state directly!!
    // Wrong -> this.state.displayBio = !this.state.displayBio
    // Right vv
    this.setState({ displayBio: !this.state.displayBio });
  };

  // Render defines the structure of the component itself. The structure is defined through JSX.
  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile"></img>
        <h1>Hello!</h1>
        <p>My name is Kevin Brown.</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>
              I live in Calgary, and I'm always pushing myself to continue
              learning new technologies.
            </p>
            <p>Besides coding, I also love music and cooking!</p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
