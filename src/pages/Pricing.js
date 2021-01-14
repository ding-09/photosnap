import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BetaInvite from '../components/BetaInvite';
import heroImage from '../assets/pricing/desktop/hero.jpg';
import tabletHeroImage from '../assets/pricing/tablet/hero.jpg';

const Pricing = () => {
    const [toggle, setToggle] = useState(false);

  useEffect(() => {
     const monthly = document.getElementById("monthly");
     const yearly = document.getElementById("yearly");

     // on first mount, set default
     yearly.style.opacity = 0.5;

     // on toggle change
     if (toggle) {
        monthly.style.opacity = 0.5;
        yearly.style.opacity = 1;
     } else {
         monthly.style.opacity = 1;
     }
  }, [toggle]);
  return (
    <main>
      <HeroSection>
        <HeroText>
          <div className="hero-border"></div>
          <div className="text-container">
            <h1>PRICING</h1>
            <p>
              Create your stories. Photosnap is a platform for photographers and
              visual storytellers. It’s the simple way to create and share your
              photos.
            </p>
          </div>
        </HeroText>
        <HeroImage>
          <figure></figure>
        </HeroImage>
      </HeroSection>
      <PricingSection>
        <div className="pricing-container">
          <div className="price-toggle">
            <h3 id="monthly">Monthly</h3>
            <div className="toggle-switch">
              <input type="checkbox" onClick={() => setToggle(!toggle)}/>
            </div>
            <h3 id="yearly">Yearly</h3>
          </div>
        </div>
      </PricingSection>
      <BetaInvite />
    </main>
  );
};

const HeroSection = styled.section`
  display: flex;
  height: 49rem;
`;

const HeroText = styled.article`
  background: #000000;
  color: #ffffff;
  flex: 1 1 61rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .hero-border {
    height: 14.4rem;
  }
  .text-container {
    min-width: 38rem;
    width: 40rem;
    height: 15rem;
    margin: 5rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 4.2rem;
      opacity: 0.6;
    }
  }
`;

const HeroImage = styled.article`
  flex: 1 1 83rem;
  height: 100%;
  figure {
    width: 100%;
    height: 100%;
    background: url(${heroImage});
    background-size: cover;
    background-position: center;
    @media (max-width: 768px) {
      background: url(${tabletHeroImage});
    }
  }
`;

const PricingSection = styled.section`
  .pricing-container {
    height: 50rem;
  }
  .price-toggle {
    display: flex;
    width: 25rem;
    margin: 12rem auto 4.8rem;
    justify-content: space-between;
    align-items: center;
    .toggle-switch {
      width: 6.4rem;
      height: 3.2rem;
      border-radius: 1.6rem;
      overflow: hidden;
      text-align: center;
      input[type='checkbox'] {
        width: 100%;
        height: 100%;
        background: #dfdfdf;
        appearance: none;
        cursor: pointer;
        position: relative;
        transition: 0.5s;
        &:before {
          content: '';
          position: absolute;
          left: 4px;
          top: 5px;
          width: 2.3rem;
          height: 2.3rem;
          background: #000000;
          border-radius: 50%;
          transition: 0.5s;
        }
        &:checked {
          transition: 0.5s;
          background: #000000;
          &:before {
            transform: translateX(3.2rem);
            background: #ffffff;
          }
        }
      }
    }
  }
`;

export default Pricing;
