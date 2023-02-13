import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { HomePage } from "./pages/HomePage";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
