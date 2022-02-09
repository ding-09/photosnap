import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';


// React router 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// import main components
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  // state to indicate whether Feature page is active 
  // to trigger a different button on the Header 
  const [onFeatures, setOnFeatures] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Header onFeatures={onFeatures} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/stories">
          <Stories />
        </Route>
        <Route exact path="/features">
          <Features setOnFeatures={setOnFeatures} />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
