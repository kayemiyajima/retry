import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/LandingPage/Header';
import SmallMenu from './components/LandingPage/SmallMenu';
import Home from './components/LandingPage/Home';
import Register from './components/RegisterPage/Register';
import Login from './components/LoginPage/Login';
import UploadVideo from './components/UploadVideoPage/UploadVideo';
import VideoPage from './components/VideoPage/VideoPage';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/video/upload">
              <UploadVideo /> 
          </Route>

          <Route path="/user/register">
              <Register />
          </Route>

          <Route path="/user/login">
                <Login />
          </Route>

          <Route path="/video/:videoId">
                <VideoPage />
          </Route>
          
          <Route path='/'>
            <div className='app__page'>
              <div className='app__page__smallMenu'>
                <SmallMenu />
              </div>
              <div className='app__page__home'>
                <Home /> 
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
