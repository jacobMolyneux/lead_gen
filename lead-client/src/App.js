import {Homepage} from './components/homepage'
import {Routes, Route} from 'react-router-dom'
import {AboutPage} from './components/aboutPage'
import Nav from 'react-bootstrap/Nav'
function App() {
  return (
    <div className="App">
      <div className = 'border-bottom mb-3'>
        <h1 className = 'p-3'>Lead Getter</h1>
        <Nav>
          <Nav.Item>
            <Nav.Link href = '/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href = '/About'>About</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Routes>
        <Route path = '/' element = {<Homepage/>}/>
        <Route path = '/About' element = {<AboutPage/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
