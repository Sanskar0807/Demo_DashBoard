import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loader from "./Components/Loader";
import { Pathname } from "./Pathname";

import "./app.scss";
import UserPage from "./Components/UserPage/UserPage";

const NotFound = React.lazy(() => import("./Views/404"));


export function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route index path={Pathname.LANDING_PAGE} element={<UserPage/>} />

          <Route path="*" component={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
