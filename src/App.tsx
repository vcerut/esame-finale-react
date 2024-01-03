import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import DetailPage from "./pages/DetailPage";

const Homepage = lazy(() => import("./pages/HomePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "detail/:id",
    element: <DetailPage />,
  },
  {
    //wildcard match, percorso sempre da inserire per ultimo, nel caso in cui nessun altro path venga eseguito
    path: "*",
    // element: <h1>404</h1>, //pagina di errore personalizzata, si può anche creare una pagina a parte per poi importarla
    element: <Navigate to='/' />, //fallback redirect
  },
]);

function App() {
  return (
    <Suspense fallback={<p>Waiting for lazy load</p>}>
      {" "}
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
