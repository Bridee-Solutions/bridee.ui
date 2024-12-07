import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import 'simplebar-react/dist/simplebar.min.css';
import { defineContext, rotasComuns } from './context/Context';

function App() {
  // const [loading, setLoading] = useState(false);

    return (
      <Router>
        {defineContext()}
        <ToastContainer autoClose={2000}/>
      </Router>
    )
  }

  export default App
