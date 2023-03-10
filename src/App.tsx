import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, LayoutAccount } from "./components/layout";
import BlogDetails from "./modules/blog/BlogDetails";
import FamousPlacePage from "./pages/FamousPlacePage";
const BlogPage = lazy(() => import("./pages/BlogPage"));
const PromotionalOffersPage = lazy(
  () => import("./pages/PromotionalOffersPage")
);
const EvaluatePage = lazy(() => import("./pages/EvaluatePage"));
const FaqAnswerPage = lazy(() => import("./pages/FaqAnswerPage"));
const FavouritePage = lazy(() => import("./pages/FavouritePage"));
const VouncherCodePage = lazy(() => import("./pages/VouncherCodePage"));
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
          <Route path="/" element={<Layout layout="layout-home" />}>
            <Route index element={<HomePage />}></Route>
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
                textTo="L???a ch???n c???a b???n"
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
                textTo="Quay l???i t??m ki???m"
                footerHidden
              />
            }
          >
            <Route path="/sign-in" element={<SignInPage />}></Route>
          </Route>

          {/* Router sidebar */}
          <Route element={<LayoutAccount />}>
            <Route
              path="/account/account-info"
              element={<AccountPage />}
            ></Route>
            <Route
              path="/account/history-booking"
              element={<HistoryBooking />}
            ></Route>
            <Route
              path="/account/voucher-code"
              element={<VouncherCodePage />}
            ></Route>
            <Route
              path="/account/favourite"
              element={<FavouritePage />}
            ></Route>
            <Route path="/account/evaluate" element={<EvaluatePage />}></Route>
          </Route>

          {/* Route FAQ */}
          <Route
            element={
              <Layout
                layout="layout-headerNav"
                backTo="back-search"
                textTo="Quay l???i t??m ki???m"
              />
            }
          >
            <Route path="/faq-answers" element={<FaqAnswerPage />}></Route>
          </Route>

          <Route
            element={
              <Layout
                layout="layout-headerNav"
                backTo="back-home"
                textTo="Quay l???i trang ch???"
              />
            }
          >
            <Route path="/blog" element={<BlogPage />}></Route>
            <Route
              path="/promotional-offers"
              element={<PromotionalOffersPage />}
            ></Route>
            <Route path="/famous-place" element={<FamousPlacePage />}></Route>
          </Route>

          <Route
            element={
              <Layout
                layout="layout-headerNav"
                backTo="back-blog"
                textTo="Quay l???i trang blog"
              />
            }
          >
            <Route path="/blog/:id" element={<BlogDetails />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
