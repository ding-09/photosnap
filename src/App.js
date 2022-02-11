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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquam ex nisi aspernatur optio alias beatae blanditiis pariatur, cumque vel! Fugit, quidem. Suscipit, nihil? Quaerat provident veritatis facere non ex, nemo harum voluptatum aut ipsam architecto odit, animi eligendi aspernatur eum voluptatem, blanditiis similique error! Necessitatibus reiciendis sit voluptas facilis?
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
