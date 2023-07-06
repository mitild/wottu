import { createBrowserRouter } from "react-router-dom"
import Layout from './Layout'
import Error from "../components/Error/Error"
import Home from "../pages/Home"
import SearchResults from "../pages/SearchResults"
import SingleShow from "../pages/SingleShow"
import WatchlistPage from "../pages/WatchlistPage"
import SignUpPage from "../pages/SIgnUpPage"
import LoginPage from "../pages/LoginPage"
import ProtectedRoutes from "./ProtectedRoutes"

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
            {
        path: '/',
        element: <ProtectedRoutes />,
        children:[
          {
            path:'search-results/:search',
            element: <SearchResults />
          },
          {
            path: 'tv/:show',
            element: <SingleShow />
          },
          {
            path: 'movie/:show',
            element: <SingleShow />
          },
          {
            path: 'person/:name',
            element: <SingleShow />
          },
          {
            path: 'my-watchlist',
            element: <WatchlistPage />
          }
        ]
      }
    ]
  }
])

export default Router