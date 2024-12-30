import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import 'simplebar-react/dist/simplebar.min.css';
import { rotas } from './context/Context';
import { CasalContextProvider } from './context/CasalContext';
import SimpleBar from 'simplebar-react';

function App() {
  // const [loading, setLoading] = useState(false);

    return (
      <Router>
        <CasalContextProvider >
          <SimpleBar style={{ maxHeight: '100vh' }}>
          <Routes>
              <Route>
                  {rotas?.map(rota => {
                      return <Route path={rota.path} element={rota.element}></Route>
                  })}
              </Route>
          </Routes>
          </SimpleBar>
        </CasalContextProvider>
        <ToastContainer autoClose={2000}/>
      </Router>
    )
  }

  export default App
