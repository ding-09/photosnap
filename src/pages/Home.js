import React from 'react';
import styled from 'styled-components';
import ArrowButton from '../styles/ArrowButton';
import StoryData from '../components/StoryData';
import StoryCard from '../components/StoryCard';

// images and icons
import createAndShare from '../assets/home/desktop/hero.jpg';
import tabletCreateAndShare from '../assets/home/desktop/hero.jpg';
import mobileCreateAndShare from '../assets/home/desktop/hero.jpg';
import beautifulStories from '../assets/home/desktop/beautiful-stories.jpg';
import tabletBeautifulStories from '../assets/home/tablet/beautiful-stories.jpg';
import mobileBeautifulStories from '../assets/home/mobile/beautiful-stories.jpg';
import designedFor from '../assets/home/desktop/designed-for-everyone.jpg';
import tabletDesignedFor from '../assets/home/tablet/designed-for-everyone.jpg';
import mobileDesignedFor from '../assets/home/mobile/designed-for-everyone.jpg';
import responsiveIcon from '../assets/features/desktop/responsive.svg';
import noLimitIcon from '../assets/features/desktop/no-limit.svg';
import embedIcon from '../assets/features/desktop/embed.svg';

const Home = () => {
  return (
    <main>
      {/* Main 3 Sections */}
      <Section height="65rem">
        <TextBox background="#000000">
          <div className="hero-border"></div>
          <div className="mobile-hero-border"></div>
          <div className="text-container">
            <h1>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
            <p>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <ArrowButton title="GET AN INVITE" color="#ffffff" />
          </div>
        </TextBox>
        <ImageBox url={createAndShare}>
          <figure id="create"></figure>
        </ImageBox>
      </Section>
      <Section>
        <TextBox id="middle-textBox">
          <div className="text-container">
            <h2 className="heading">
              BEAUTIFUL STORIES <br></br>EVERY TIME
            </h2>
            <p>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <ArrowButton title="VIEW THE STORIES" color="#000000" />
          </div>
        </TextBox>
        <ImageBox url={beautifulStories}>
          <figure id="stories"></figure>
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
            <ArrowButton title="VIEW THE STORIES" color="#000000" />
          </div>
        </TextBox>
        <ImageBox url={designedFor}>
          <figure id="design"></figure>
        </ImageBox>
      </Section>
      {/* Story Card Section */}
      <StoryRow>
        {/* use slice up to 4 before mapping */}
        {StoryData.slice(0, 4).map((data, index) => (
          <StoryCard data={data} key={index} onHome={true} />
        ))}
      </StoryRow>
      {/* Additional Feature Info */}
      <AdditionalInfo>
        <div className="additionalInfo-container">
          <article>
            <img src={responsiveIcon} alt="icon" />
            <h3>100% Responsive</h3>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </article>
          <article className="middle-feature">
            <img src={noLimitIcon} alt="icon" />
            <h3>No Photo Upload Limit</h3>
            <p>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </article>
          <article>
            <img src={embedIcon} alt="icon" />
            <h3>Available to Embed</h3>
            <p>
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.{' '}
            </p>
          </article>
        </div>
      </AdditionalInfo>
    </main>
  );
};

const Section = styled.section`
  height: ${(props) => props.height || '60rem'};
  display: flex;
  #middle-textBox {
    order: 1;
  }
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    min-height: 70rem;
    #middle-textBox {
      order: 0;
    }
  }
`;

const TextBox = styled.div`
  background: ${(props) => props.background || '#ffffff'};
  color: ${(props) => props.background && '#ffffff'};
  flex: 1 1 61rem;
  display: flex;
  align-items: center;
  position: relative;
  .text-container {
    min-width: 37.5rem;
    width: 40rem;
    height: 30.4rem;
    margin: 0 10rem;
    h1,
    h2 {
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 4.5rem;
      opacity: 0.6;
    }
  }
  @media (max-width: 768px) {
    .text-container {
      margin: 0 5rem;
    }
  }
  @media (max-width: 600px) {
    flex: 1 1 55%;
    .hero-border {
      height: 65%;
    }
    .text-container {
      margin: 0 8rem;
      height: auto;
      h1,
      h2 {
        margin-bottom: 1.5rem;
      }
      p {
        margin-bottom: 3rem;
      }
    }
  }
  @media (max-width: 560px) {
    .hero-border {
      display: none;
    }
    .text-container {
      padding: 0 2.2rem;
    }
  }
  @media (max-width: 500px) {
    justify-content: center;
  }
  @media (max-width: 375px) {
    flex: 1 1 60%;
    .mobile-hero-border {
      display: block;
    }
    .text-container {
      padding-left: 3.5rem;
    }
  }
`;

const ImageBox = styled.div`
  flex: 1 1 83rem;
  figure {
    width: 100%;
    height: 100%;
    background: url(${(props) => props.url && `${props.url}`}) no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    #create {
      background: url(${tabletCreateAndShare}) no-repeat;
      background-size: cover;
      background-position: center;
    }
    #stories {
      background: url(${tabletBeautifulStories}) no-repeat;
      background-size: cover;
      background-position: center;
    }
    #design {
      background: url(${tabletDesignedFor}) no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
  @media (max-width: 600px) {
    flex: 1 1 45%;
    #create {
      background: url(${mobileCreateAndShare}) no-repeat;
      background-size: cover;
      background-position: center;
    }
    #stories {
      background: url(${mobileBeautifulStories}) no-repeat;
      background-size: cover;
      background-position: center;
    }
    #design {
      background: url(${mobileDesignedFor}) no-repeat;
      background-size: cover;
      background-position: top;
    }
  }
  @media (max-width: 500px) {
    flex: 1 1 43%;
  }
`;

const StoryRow = styled.section`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const AdditionalInfo = styled.section`
  .additionalInfo-container {
    max-width: 111rem;
    height: 24rem;
    margin: 16rem auto;
    padding: 0 2rem;
    display: flex;
    article {
      flex-basis: 35rem;
      text-align: center;
      h3 {
        margin-top: 4.8rem;
        margin-bottom: 1.6rem;
      }
      p {
        opacity: 0.6;
      }
    }
    .middle-feature {
      margin: 1.8rem 3rem 0;
      h3 {
        margin-top: 6.6rem;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      width: 80%;
      height: auto;
      margin: 12rem auto;
      padding: 0 7rem;
      article {
        flex-basis: 21rem;
      }
      .middle-feature {
        margin: 8rem 0;
        h3 {
          margin-top: 4.8rem;
        }
      }
    }
    @media (max-width: 500px) {
      margin: 8rem auto;
      padding: 0 2rem;
    }
  }
`;

export default Home;
