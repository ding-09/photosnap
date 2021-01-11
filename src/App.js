import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
// use React router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import all the pages and necessary components
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/stories">
          <Stories />
        </Route>
        <Route exact path="/features">
          <Features />
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