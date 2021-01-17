import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BetaInvite from '../components/BetaInvite';
import heroImage from '../assets/pricing/desktop/hero.jpg';
import tabletHeroImage from '../assets/pricing/tablet/hero.jpg';
import RectangleButton from '../styles/RectangleButton';
import checkMark from '../assets/pricing/desktop/check.svg';

const Pricing = () => {
  const monthlyPrice = {
    basic: '$19.00',
    pro: '$39.00',
    business: '$99.00',
  };
  const yearlyPrice = {
    basic: '$190.00',
    pro: '$390.00',
    business: '$990.00',
  };
  const [toggle, setToggle] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(monthlyPrice);

  const handlePriceToggle = () => {
    setToggle(!toggle);
    setDisplayPrice((prevState) => (!toggle ? yearlyPrice : monthlyPrice));
  };

  useEffect(() => {
    const monthly = document.getElementById('monthly');
    const yearly = document.getElementById('yearly');

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
          <PriceToggle>
            <div className="toggle-container">
              <h3 id="monthly">Monthly</h3>
              <div className="toggle-switch">
                <input type="checkbox" onClick={handlePriceToggle} />
              </div>
              <h3 id="yearly">Yearly</h3>
            </div>
          </PriceToggle>
          <PriceTable>
            <PriceCard>
              <div className="intro">
                <h2>Basic</h2>
                <p>
                  Includes basic usage of our platform. Recommended for new and
                  aspiring photographers.
                </p>
              </div>
              <div className="pricing">
                <h3 className="heading">$19.00</h3>
                <p>per month</p>
              </div>
              <RectangleButton black>PICK PLAN</RectangleButton>
            </PriceCard>
            <PriceCard id="pro">
              <div className="intro">
                <h2>Pro</h2>
                <p>
                  More advanced features available. Recommended for photography
                  veterans and professionals.
                </p>
              </div>
              <div className="pricing">
                <h3 className="heading">$39.00</h3>
                <p>per month</p>
              </div>
              <RectangleButton black>PICK PLAN</RectangleButton>
            </PriceCard>
            <PriceCard>
              <div className="intro">
                <h2>Business</h2>
                <p>
                  Additional features available such as more detailed metrics.
                  Recommended for business owners.
                </p>
              </div>
              <div className="pricing">
                <h3 className="heading">$99.00</h3>
                <p>per month</p>
              </div>
              <RectangleButton black>PICK PLAN</RectangleButton>
            </PriceCard>
          </PriceTable>
        </div>
      </PricingSection>
      <FeaturesSection>
        <FeaturesTable>
          <caption className="heading">COMPARE</caption>
          <thead>
            <tr>
              <th className="left">THE FEATURES</th>
              <th>BASIC</th>
              <th>PRO</th>
              <th>BUSINESS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="left">UNLIMITED STORY POSTING</th>
              <td>
                <img src={checkMark} alt="" />
              </td>
              <td>
                <img src={checkMark} alt="" />
              </td>
              <td>
                <img src={checkMark} alt="" />
              </td>
            </tr>
            <tr>
              <th className="left">UNLIMITED PHOTO UPLOAD</th>
              <td>
                <img src={checkMark} alt="" />
              </td>
              <td>
                <img src={checkMark} alt="" />
              </td>
              <td>
                <img src={checkMark} alt="" />
              </td>
            </tr>
            <tr>
              <th className="left">EMBEDDING CUSTOM CONTENT</th>
              <td></td>
              <td>
                <img src={checkMark} alt="" />
              </td>
              <td>
                <img src={checkMark} alt="" />
              </td>
            </tr>
            <tr>
              <th className="left">CUSTOMIZE METADATA</th>
              <td></td>
              <td>
                <img src={checkMark} alt="" />
              </td>
              <td>
                <img src={checkMark} alt="" />
              </td>
            </tr>
            <tr>
              <th className="left">ADVANCED METRICS</th>
              <td></td>
              <td></td>
              <td>
                <img src={checkMark} alt="" />
              </td>
            </tr>
            <tr>
              <th className="left">PHOTO DOWNLOADS</th>
              <td></td>
              <td></td>
              <td>
                <img src={checkMark} alt="" />
              </td>
            </tr>
            <tr>
              <th className="left">SEARCH ENGINE INDEXING</th>
              <td></td>
              <td></td>
              <td>
                <img src={checkMark} alt="" />
              </td>
            </tr>
            <tr>
              <th className="left">CUSTOM ANALYTICS</th>
              <td></td>
              <td></td>
              <td>
                <img src={checkMark} alt="" />
              </td>
            </tr>
          </tbody>
        </FeaturesTable>
      </FeaturesSection>
      <BetaInvite />
    </main>
  );
};

const PriceTable = styled.section`
  max-height: 47rem;
  margin-top: 8rem;
  display: flex;
  #pro {
    margin: 0 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 86rem;
    #pro {
      margin: 2rem 0;
    }
  }
`;

const PriceCard = styled.article`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 40.7rem;
  padding: 0 2rem;
  justify-content: space-evenly;
  position: relative;
  h2 {
    padding-bottom: 1.8rem;
  }
  p {
    opacity: 0.6;
  }
  @media (max-width: 768px) {
    height: 27rem;
    text-align: left;
    justify-content: space-around;
    .intro, button {
      width: 45%;
      margin-left: 2rem;
    }
    .intro {
      margin-top: 2rem;
    }
    .pricing {
      position: absolute;
      top: 4rem;
      right: 4rem;
      p {
        text-align: right;
        padding-right: 5px;
      }
    }
  } 
`;

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
    min-width: 37.5rem;
    width: 40rem;
    height: 15rem;
    margin: 5rem;
    h1 {
      margin-bottom: 2rem;
    }
    .summary {
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
  margin: 12rem 0 16rem;
  .pricing-container {
    max-width: 111rem;
    margin: auto;
  }
`;

const PriceToggle = styled.section`
  display: flex;
  justify-content: center;
  .toggle-container {
    display: flex;
    width: 25rem;
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

const FeaturesSection = styled.div`
  max-width: 73rem;
  min-height: 62rem;
  margin: 0 auto 16rem;
`;

const FeaturesTable = styled.table`
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 2px;
  width: 100%;
  caption {
    padding-bottom: 5.6rem;
  }
  .left {
    text-align: left;
    padding-left: 2rem;
    width: 40%;
  }
  th,
  td {
    text-align: center;
    width: 14rem;
  }
  thead {
    th {
      padding-bottom: 2rem;
      border-bottom: 1px solid #000000;
    }
  }
  tbody {
    tr {
    }
    th,
    td {
      padding: 2.3rem 0;
      border-bottom: 1px solid #dfdfdf;
    }
  }
`;

export default Pricing;
