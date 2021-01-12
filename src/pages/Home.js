import React from 'react';
import styled from 'styled-components';
import ArrowButton from '../styles/ArrowButton';
import StoryData from '../components/StoryData';
import StoryCard from '../components/StoryCard';

// images
import createAndShare from '../assets/home/desktop/create-and-share.jpg';
import beautifulStories from '../assets/home/desktop/beautiful-stories.jpg';
import designedFor from '../assets/home/desktop/designed-for-everyone.jpg';

const Home = () => {
  return (
    <main>
      <Section height="65rem">
        <TextBox background="#000000">
          <div className="text-container">
            <h1>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
            <p>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <ArrowButton title="GET AN INVITE" color="#fff" />
          </div>
        </TextBox>
        <ImageBox url={createAndShare}>
          <figure></figure>
        </ImageBox>
      </Section>
      <Section>
        <TextBox id="middle-textBox">
          <div className="text-container">
            <h2 className="heading">BEAUTIFUL STORIES <br></br>EVERY TIME</h2>
            <p>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <ArrowButton title="VIEW THE STORIES" color="#000" />
          </div>
        </TextBox>
        <ImageBox url={beautifulStories}>
          <figure></figure>
        </ImageBox>
      </Section>
      <Section>
        <TextBox>
          <div className="text-container">
            <h2 className="heading">DESIGNED FOR EVERYONE</h2>
            <p>
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <ArrowButton title="VIEW THE STORIES" color="#000" />
          </div>
        </TextBox>
        <ImageBox url={designedFor}>
          <figure></figure>
        </ImageBox>
      </Section>
      <StoryRow>
        {/* use slice up to 4 before mapping */}
        {StoryData.map((data, index) => (
          <StoryCard data={data} key={index}/>
        ))}
      </StoryRow>
    </main>
  );
};

const Section = styled.section`
  height: ${(props) => props.height || '60rem'};
  display: flex;
  #middle-textBox {
    order: 1;
  }
`;

const TextBox = styled.div`
  background: ${(props) => props.background || '#ffffff'};
  color: ${(props) => props.background && '#ffffff'};
  flex: 1 1 65rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .text-container {
    min-width: 38rem;
    width: 40rem;
    height: 30.4rem;
    margin: 1rem;
    h1,
    h2 {
      margin-bottom: 2.1rem;
    }
    p {
      margin-bottom: 4.5rem;
      opacity: 0.6;
    }
  }
  #middle-row {
    order: 1;
  }
`;

const ImageBox = styled.div`
  flex: 1 1 83rem;
  height: 100%;
  figure {
    width: 100%;
    height: 100%;
    background: url(${(props) => props.url && `${props.url}`}) no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

const StoryRow = styled.section`
  display: flex;
  height: 50rem;
`

export default Home;
