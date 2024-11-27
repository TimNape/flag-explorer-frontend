
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import './App.css';
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import HomePage from "./pages/HomePage/HomePage";
import CountryListPage from "./pages/CountryListPage/CountryListPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Navbar from "./components/Navbar/Navbar";

const CountryDetailsPage = lazy(() => import("./pages/CountryDetailsPage/CountryDetailsPage"));

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
              <Suspense fallback={<LoadingPage />}>
              <Navbar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/countries" element={<CountryListPage />} />
                  <Route path="/country/:countryName" element={<CountryDetailsPage />} />
                  <Route path="*" element={<HomePage />} />
                </Routes>
                </Suspense>
              <ScrollToTopButton />
      </Provider>
    </BrowserRouter>
  );
}
export default App;
