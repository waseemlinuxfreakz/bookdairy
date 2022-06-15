import './App.css';
import './Global.css';
import TopNavigation from './components/TopNavigate';
import FooterNavigation from './components/FooterNavigation';
import OurVision from './components/Ourvision';
import AboutStudy from './components/AboutStudy';

function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <div className="main_container">
        <OurVision/>
        <br/>
        <hr/>
        <br/>
        <AboutStudy/>
      </div>
      <FooterNavigation/>
    </div>
  );
}

export default App;
