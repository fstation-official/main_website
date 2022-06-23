import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <>
      <div className="overflow-hidden ">
        <Fade right>
          <h1 className="mt-5 text-2xl font-bold text-center">About</h1>
          <p className="container text-center sm:ml-20 md:block md:ml-12 sm:text-left ">
            RedTeam Hacker Academy Pvt. Ltd. is an all-around cybersecurity
            training company that delivers an extensive hands-on understanding
            of diverse cyber and information security domains. Focused to
            produce cybersecurity experts with 360-degree skills to combat
            security threats across the internet, cloud, and organizations.
            RedTeam Hacker Academy is an eminent security training provider
            dedicated to bridge the cybersecurity skill gap through
            implementation-centric learning programs designed by certified
            security experts.
            <br />
          </p>
        </Fade>
      </div>
      <div className="grid mt-20 sm:grid-cols-2 bg-gray-90 ">
        <div>
          <img
            className=""
            src="https://media.giphy.com/media/PI3QGKFN6XZUCMMqJm/giphy.gif"
          />
        </div>
        <div>
          <h1>sifhvudifhdusfhu</h1>
        </div>
      </div>
    </>
  );
}

export default About;
