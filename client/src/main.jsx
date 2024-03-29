import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
// import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import PlayBall from './pages/PlayBall';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/playball',
        element: <PlayBall />
      },
      {
        path: '/profile',
        element: <Profile />
      }, {
        path: '/profiles/:profileId',
        element: <Profile />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);