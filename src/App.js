import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-content-wrapper'>
        <Routes>
          <Route
            path='/profile'
            element={<Profile />}
          />
          <Route
            path='/messages/*'
            element={<MessagesContainer />}
          />
          <Route
            path='/users/*'
            element={<UsersContainer />}
          />
          <Route
            path='/news'
            element={<News />}
          />
          <Route
            path='/music'
            element={<Music />}
          />
          <Route
            path='/settings'
            element={<Settings />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
