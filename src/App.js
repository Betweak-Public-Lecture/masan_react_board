import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

import CaptionImage from './components/CaptionImage';
import Blink from './components/Blink';
import TodoList from './components/TodoList'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';
import BoardWrite from './pages/BoardWrite';
import MyNavbar from './components/MyNavbar'

import Home from './pages/Home'

function App() {
  return (
    <Router>
      {/* React-Router-Dom */}
      <MyNavbar/>

      {/* 5가지의 기능 */}
      {/* 1. 게시글 리스트 조회 */}
      {/* 2. 게시글 상세 조회 */}
      {/* 3. 게시글 수정 */}
      {/* 4. 게시글 생성 */}
      {/* 5. 게시글 삭제 */}

      <Switch>
        {/* path, component */}
        <Route path='/' exact component={Home} />
        <Route path='/board' exact component={BoardList} />
        <Route path='/board/write' exact component={BoardWrite} />
        <Route path='/board/:boardId' exact component={BoardDetail} />
      </Switch>
    </Router>
    
    // // <HelloWorld />

    // <div>
    //   {/* <CaptionImage 
    //     imgUrl="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg" 
    //     caption="고양이"
    //     />
    //   <CaptionImage 
    //     imgUrl="https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_2.jpg" 
    //     caption="고양이"
    //     />
    //   <CaptionImage imgUrl='https://cdn.cvinfo.com/news/photo/201711/7409_11427_2949.png' caption="이건 트럭입니다." /> */}
    //   <div stye={{fontSize:60}}>
    //     {/* <Blink text="이 문자는" rest="AAa" />
    //     <Blink text="2초에 한번씩" />
    //     <Blink text="깜빡입니다." /> */}
    //     <TodoList/>

    //   </div>

    // </div>
  );
}

export default App;
