import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://avatars.mds.yandex.net/i?id=e6502707d86cc8914e8d81f7e66db73f4b4a2ef8-4952143-images-thumbs&n=13" alt="logo" />
      </header>
      <nav className='nav'>
        nav
      </nav>
      <div className='content'>
        <img src="https://www.borealcm.com/wp-content/uploads/2015/06/placeholderimg-1024x576.png" alt="pfp" />
        <div>ava + desc</div>
        <div>
          My posts
          <div>
            new post
          </div>
          <div>
            <div>
              post1
            </div>
            <div>
              post2
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
