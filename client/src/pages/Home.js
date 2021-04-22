import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";
import HeroJumbotron from "../components/HeroJumbotron";
import GeneralInfo from "../components/GeneralInfo";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <>
      <HeroJumbotron /> <hr />
      <GeneralInfo /> <hr />
      <AboutSection />
      <hr />
      <Container fluid>
        <Row>
          <Col size="md-6">
            <CreatePostForm />
          </Col>
          <Col size="md-6">
            <PostsList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
