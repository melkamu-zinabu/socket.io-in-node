
import './App.css';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import { Join } from './component/join/Join';
import { Chat } from './component/chat/Chat';
function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path='/' exact Component={Join}/>
     <Route path='/Chat' exact Component={Chat}/>

     </Routes>
    </BrowserRouter>
      // <Home/>
      
    
  )
}

export default App;
