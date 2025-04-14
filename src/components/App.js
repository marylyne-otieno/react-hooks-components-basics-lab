
import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

//  Here's the <About> component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <p>This is the about section.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      {/* Adding the Home component */}
      <Home />
      {/* Adding the About component */}
      <About />
    </div>
  );
}

export default App;
