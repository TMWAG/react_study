let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hello world', likes: 12},
      { id: 1, message: 'Eeeeeee', likes: 2},
      { id: 1, message: 'Greg', likes: 9000},
    ],
  },
  messagesPage: {
    dialogs: [
      { userId: 1, userName: 'Dima', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
      { userId: 2, userName: 'Anderew', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
      { userId: 3, userName: 'Sasha', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
      { userId: 4, userName: 'Ira', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
      { userId: 5, userName: 'Victor', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
      { userId: 6, userName: 'Slava', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
    ],
    messages: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'I' },
      { id: 3, message: 'Am' },
      { id: 4, message: 'Gnome' },
      { id: 5, message: 'And you been gnoomed' },
    ],
  },
};

export default state;