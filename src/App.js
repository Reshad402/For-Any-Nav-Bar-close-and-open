
import './App.css';
import Analysis from './Components/Analysis';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar/Navbar';
import NewsLetter from './Components/NewsLetter';
import LinkPlace from './Components/Places/LinkPlace';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <LinkPlace></LinkPlace>
      <Footer></Footer>
      {/* <Analysis></Analysis> */}
      {/* <NewsLetter></NewsLetter> */}
    </div>
  );
}

export default App;
