import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, LayoutAccount } from "./components/layout";
const SignInPage = lazy(() => import("./authentication/SignInPage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const DetailsRoomPage = lazy(() => import("./pages/DetailsRoomPage"));
const HistoryBooking = lazy(() => import("./pages/HistoryBooking"));
const PersonalInfoRoomPage = lazy(() => import("./pages/PersonalInfoRoomPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

const App = () => {
  return (
    <div className="wrapper">
      <Suspense
        fallback={
          <>
            <div className="bounce-loading">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </>
        }
      >
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

          {/* Router sidebar */}
          <Route element={<LayoutAccount />}>
            <Route path="/account-info" element={<AccountPage />}></Route>
            <Route path="/history-booking" element={<HistoryBooking />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
