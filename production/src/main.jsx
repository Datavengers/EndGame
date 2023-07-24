import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import './gameMapStyles.css'
import './loginStyles.css'
import Root from "./routes/root"
import ErrorPage from "./error-page";
import Index from "./routes/index";
import Game_Map from "./routes/game_map";
import Sll_Home from "./routes/sll_home";
import Dll_Home from "./routes/dll_home";
import Login from "./routes/login";
import Prizes_Home from './routes/prize_home';
import Resources_Home from './routes/resource_home';
import Signup from './routes/siginup';
import TrainGame from './routes/traingame';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index />},
          {
            path: "game_map",
            element:<Game_Map />,
          },
          {
            path: "singly-linked-lists",
            element:<Sll_Home />,
            children:[
              {path:"singly-linked-lists/articles"},
              {path:"singly-linked-lists/train-game",
              element:<TrainGame />,
              },
              {path:"singly-linked-lists/quizzes",}
            ]
          },
          {
            path: "doubly-linked-lists",
            element:<Dll_Home />,
            children:[
              {path:"doubly-linked-lists/articles",},
              {path:"doubly-linked-lists/games",},
              {path:"doubly-linked-lists/quizzes",}
            ]
          },
          {
            path:"login",
            element:<Login/>,
          },
          {
            path:"signup",
            element:<Signup/>,
          },
          {
            path: "prizes",
            element:<Prizes_Home />,
          },
          {
            path: "resources",
            element:<Resources_Home />,
          },
          {
            // This should keep a bad URL error confined within the page boundaries
            path:"*",
            element:<ErrorPage/>
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
