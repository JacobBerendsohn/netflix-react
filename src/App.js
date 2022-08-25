import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
