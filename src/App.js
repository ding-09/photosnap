import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// routes
import Home from './components/Home';
import Stories from './components/Stories';
import Features from './components/Features';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='stories' element={<Stories />} />
              <Route path='features' element={<Features />} />
              <Route path='pricing' element={<Pricing />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
