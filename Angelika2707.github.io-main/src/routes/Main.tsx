import React from "react";
import Layout from "../components/Layout";
import Greeting from "../components/Greeting";
import AboutMe from "../components/About_me";
import Projects from "../components/Projects";

const Main: React.FC = () => {
  return (
    <Layout>
      <Greeting />
      <AboutMe />
      <Projects />
    </Layout>
  );
};

export default Main;
