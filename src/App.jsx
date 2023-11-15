import './app.scss'
import Layout from './components/Layout';
import Range from './pages/Range';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":id",
        element: <Range />,
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
