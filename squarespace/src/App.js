import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageRouter from './Route/PageRouter';

function App() {
  return (
    <div >
    <Router>
    <Routes>
        <Route path='/*' element = {<PageRouter/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
