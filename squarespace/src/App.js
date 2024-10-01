import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageRouter from './Route/PageRouter';
import MenuRouter from './Route/MenuRouter';

function App() {
  return (
    <div >
    <Router>
    <Routes>
        <Route path='/*' element = {<PageRouter/>} />
        <Route path='/menu*' element = {<MenuRouter/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
