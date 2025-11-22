import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cursor from './components/Cursor';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Cursor />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
