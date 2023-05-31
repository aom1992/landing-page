import Header from './components/Header'
import Banner from './components/Banner'
import Content from './components/Content';
import CTA from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header className="App-header">
        <Header/>
        <Banner/>
        <Content/>
        <CTA/>
        <Footer/>
      </header>
    </>
  );
}

export default App;
