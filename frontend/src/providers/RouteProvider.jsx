import App from "@/App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/profile",
    element: <div>Profile Page</div>
  },
])

const RouteProvider = () => <RouterProvider router={router} />

export default RouteProvider