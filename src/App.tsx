import { Routes, Route } from "react-router-dom";
import SignInPage from "./authentication/SignInPage";
import { Layout } from "./components/layout";
import DetailsRoomPage from "./pages/DetailsRoomPage";
import { HomePage } from "./pages/HomePage";
import PersonalInfoRoomPage from "./pages/PersonalInfoRoomPage";
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

        <Route element={<Layout layout="layout-headerNav" />}>
          <Route
            path="/personal-infoRoom"
            element={<PersonalInfoRoomPage />}
          ></Route>
        </Route>

        <Route element={<Layout layout="layout-headerNav" footerHidden />}>
          <Route path="/sign-in" element={<SignInPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
