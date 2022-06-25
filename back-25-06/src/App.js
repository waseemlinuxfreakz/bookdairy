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
import Participating from './components/participating';
import AboutUser from './components/Aboutuser';
import AloggedIn from './components/aloggedin';
import Discussionon from './components/Discussionon';
import DiscussiononReplay from './components/DiscussiononReplay';
import DiscussiononReplay2 from './components/DiscussiononReplay2';
import PostComment from './components/PostComment';
import CommentSubmit from './components/CommentSubmit';
import PostTopic from './components/PostTopic';
import SuccessTopiPost from './components/SucceccTopicPost';
import CreateProfile from './components/CreateProfile';


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
        <br />
        <hr/>
        <br />
        <Participating/>
        <br />
        <hr/>
        <br />
        <AboutUser/>
        <br />
        <hr/>
        <br />
        <AloggedIn/>
        <br />
        <hr/>
        <br />
        <Discussionon/>
        <br />
        <hr/>
        <br />
        <DiscussiononReplay/>
        <br />
        <hr/>
        <br />
        <PostComment/>
        <br />
        <hr/>
        <br />
        <CommentSubmit/>
        <br />
        <hr/>
        <br />
        <PostTopic/>
        <br />
        <hr/>
        <br />
        <SuccessTopiPost/>
        <br />
        <hr/>
        <br />
        <Discussionon/>
        <br />
        <hr/>
        <br />
        <DiscussiononReplay2/>
        <br />
        <hr/>
        <br />
        <PostComment/>
        <br />
        <hr/>
        <br />
        <PostTopic/>
        <br />
        <hr/>
        <br />
        <CreateProfile/>
        <br />
        <hr/>
        <br />

        
        
      </div>
      <FooterNavigation/>
    </div>
  );
}

export default App;
