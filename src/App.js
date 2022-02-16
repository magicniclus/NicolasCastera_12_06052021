import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
