import './App.css';
import { Calculator } from './components/Calculator';
import { ColorChange } from './components/ColorChange';
import { Route , Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { Home } from './components/Home';
import Todo from './components/Todo';
import { Nav } from './components/Nav';

function App() {

  return (
    <div className="App ">
      <Nav/>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/calculator' element={<Calculator/>}></Route>
        <Route path='/colorbox' element={<ColorChange/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
