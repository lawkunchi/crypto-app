import {BinanceProvider} from './context/BinanceProvider';
import Home from './screens/Home';
import Account from './screens/Account';
import { Routes, Route } from "react-router-dom";
import Alert from './components/Alert';


function App() {
  return (
    <BinanceProvider>
      <Alert/>
      <Routes>
          <Route path="/account" element={<Account />}/>
          <Route path="/"  element={<Home/>} />
      </Routes>
    </BinanceProvider>
  );
}

export default App;
