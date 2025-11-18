import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SongManager from './components/SongManager';
import Gallery from './components/Gallery';
import Chat from './components/Chat';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-purple-100 flex gap-4">
        <Link to="/songs">🦋 Songs</Link>
        <Link to="/gallery">📸 Gallery</Link>
        <Link to="/chat">💬 Chat</Link>
        <Link to="/tictactoe">🎮 Tic Tac Toe</Link>
      </nav>
      <Routes>
        <Route path="/songs" element={<SongManager />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;
