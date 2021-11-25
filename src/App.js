import './App.css';
import { Routes, Route } from 'react-router-dom'
import { UserContext } from './contexts/user';
import { useState } from 'react';
import Header from './Components/Header.js'
import Nav from './Components/Nav.js'
import ArticlesList from './Components/ArticlesList.js'
import Account from './Components/Account.js'
import SingleArticleComments from './Components/SingleArticleComments.js'
import SingleArticle from './Components/SingleArticle.js'
import ErrorPage from './Components/ErrorPage';


function App() {

  const [currentUser, setCurrentUser] = useState('tickle122');
  const [permittedUsers, setPermittedUsers] = useState(['tickle122', 'grumpy19', 'happyamy2016', 'cooljmessy', 'weegembump', 'jessjelly']);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, permittedUsers, setPermittedUsers }}>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route path="/:topic" element={<ArticlesList />} />
            <Route path="/account" element={<Account />} />
            <Route path="/article/:articleid" element={<SingleArticle />} />
            <Route path="/article/:articleid/comments" element={<SingleArticleComments />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
      

      );
}

      export default App;
