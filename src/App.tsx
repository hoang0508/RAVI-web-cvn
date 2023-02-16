import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import DetailsRoomPage from "./pages/DetailsRoomPage";
import { HomePage } from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route element={<Layout layout="layout-home" />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>

        <Route element={<Layout layout="layout-search" />}>
          <Route path="/search-result" element={<SearchPage />}></Route>
        </Route>

        <Route element={<Layout layout="layout-detail" />}>
          <Route path="/detail-room" element={<DetailsRoomPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
