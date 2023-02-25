import { Routes, Route } from "react-router-dom";
import SignInPage from "./authentication/SignInPage";
import { Layout, LayoutAccount } from "./components/layout";
import AccountPage from "./pages/AccountPage";
import DetailsRoomPage from "./pages/DetailsRoomPage";
import { HomePage } from "./pages/HomePage";
import PersonalInfoRoomPage from "./pages/PersonalInfoRoomPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        {/* Router Home */}
        <Route element={<Layout layout="layout-home" />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>

        {/* Router search */}
        <Route element={<Layout layout="layout-search" />}>
          <Route path="/search-result" element={<SearchPage />}></Route>
        </Route>

        {/* Router details room */}
        <Route element={<Layout layout="layout-detail" />}>
          <Route path="/detail-room" element={<DetailsRoomPage />}></Route>
        </Route>

        {/* Router person info */}
        <Route
          element={
            <Layout
              layout="layout-headerNav"
              backTo="back-details-room"
              textTo="Lựa chọn của bạn"
            />
          }
        >
          <Route
            path="/personal-infoRoom"
            element={<PersonalInfoRoomPage />}
          ></Route>
        </Route>

        {/* Router Signin */}
        <Route
          element={
            <Layout
              layout="layout-headerNav"
              backTo="back-search"
              textTo="Quay lại tìm kiếm"
              footerHidden
            />
          }
        >
          <Route path="/sign-in" element={<SignInPage />}></Route>
        </Route>

        <Route element={<LayoutAccount />}>
          <Route path="/account-info" element={<AccountPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
