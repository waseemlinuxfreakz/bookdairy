import './App.css';
import './Global.css';
import TopNavigation from './components/TopNavigate';
import FooterNavigation from './components/FooterNavigation';
import OurVision from './components/Ourvision';
import AboutStudy from './components/AboutStudy';
import IntroScreen from './components/IntroScreen';
import EligibilityCriteria from './components/EligibilityCriteria';
import StartDate from './components/StartDate';
import NotificationCenter from './components/NotifucationSetup';
import Confirmation from './components/Confirmation';
import LogActivity from './components/LogActivity';
import SelectPain from './components/SelectPain';
import ViewProgress from './components/ViewProgress';

function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <div className="main_container">
        <IntroScreen/>
        <OurVision/>
        <br/>
        <hr/>
        <br/>
        <AboutStudy/>
        <br />
        <hr/>
        <br />
        <EligibilityCriteria/>
        <br />
        <hr/>
        <br />
        <StartDate/>
        <br />
        <hr/>
        <br />
        <NotificationCenter/>
        <br />
        <hr/>
        <br />
        <Confirmation/>
        <br />
        <hr/>
        <br />
        <LogActivity/>
        <br />
        <hr/>
        <br />
        <SelectPain/>
        <br />
        <hr/>
        <br />
        <ViewProgress/>
      </div>
      <FooterNavigation/>
    </div>
  );
}

export default App;
