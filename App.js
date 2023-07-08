import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Analytics from './Pages/Analytics';
import Dashboard from './Pages/Dashboard';
import FileManager from './Pages/FileManager';
import Message from './Pages/Message';
import Settings from './Pages/Settings';
import Users from './Pages/Users';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <>
    <Router>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="files" element={<FileManager />} />
        <Route path="msg" element={<Message />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<> not found</> } />
      </Routes>
      </Sidebar>
    </Router>

    </>
   
  );
}

export default App;
