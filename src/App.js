import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header />
          <div className=''>body ady bietch</div>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
