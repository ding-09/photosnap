import GlobalStyle from './GlobalStyle';

// React router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// import main components
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <GlobalStyle />

      {/* ScrollToTop component allows page to scroll to top on page change in mobile view */}
      <ScrollToTop /> 
      
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/stories'>
          <Stories />
        </Route>
        <Route exact path='/features'>
          <Features />
        </Route>
        <Route exact path='/pricing'>
          <Pricing />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
