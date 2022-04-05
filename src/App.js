import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// shared components
import Header from './components/header';
import Footer from './components/footer';
import Error from './components/error'

// routes
import Home from './components/home';
import Stories from './components/stories';
import Features from './components/features';
import Pricing from './components/pricing';

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
              <Route path='*' element={<Error />}/>
            </Routes>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
