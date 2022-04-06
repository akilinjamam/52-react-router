
import './App.css';
import Home from './Component/Home/Home';
import Friends from './Component/Friends/Friends';
import About from './Component/About/About';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/About/Header';
import FriendDetail from './Component/FriendDetail/FriendDetail';
import Posts from './Component/FriendDetail/Posts/Posts';
import PostDetail from './Component/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path={"/home"} element={<Home></Home>}> </Route>
        <Route path={"/friends"} element={<Friends></Friends>}>   </Route>
        <Route path={"/friend/:detail"} element={<FriendDetail></FriendDetail>}></Route>
        <Route path={"/posts"} element={<Posts></Posts>}>
          <Route path={":postId"} element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path={"/about"} element={<About></About>}>    </Route>
        <Route path={"*"} element={<NotFound></NotFound>}>    </Route>

      </Routes>



    </div>
  );
}

export default App;
