import React from "react";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";
import HeroJumbotron from "../components/HeroJumbotron";
import GeneralInfo from "../components/GeneralInfo";
import AboutSection from "../components/AboutSection";
import ServiceCard from "../components/ServiceCard";
import services from "../assets/services";
import Wrapper from "../components/Wrapper";
import HistoryVision from "../components/HistoryVision";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <>
      <HeroJumbotron /> <hr />
      <Wrapper>
        <GeneralInfo /> <hr />
      </Wrapper>
      <AboutSection />
      <hr />
      <Wrapper>
        {services.map((service) => {
          return (
            <ServiceCard
              title={service.title}
              img={service.img}
              description={service.description}
            ></ServiceCard>
          );
        })}
      </Wrapper>
      <hr />
      <HistoryVision />
      <hr />
      <WhyUs></WhyUs>
      <CreatePostForm />
      <PostsList />
    </>
  );
};

export default Home;
