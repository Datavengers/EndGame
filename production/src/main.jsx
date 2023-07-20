import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import './gameMapStyles.css'
import Root, { 
    loader as rootLoader,
    action as rootAction } from "./routes/root"
import ErrorPage from "./error-page";
import Contact, { 
  loader as contactLoader,
  action as contactAction, 
} from "./routes/contact";
import EditContact, {
  action as editAction,
} from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";
import Game_Map from "./routes/game_map";
import Sll_Home from "./routes/sll_home";
import Dll_Home from "./routes/dll_home";
import Prizes_Home from './routes/prize_home';
import Resources_Home from './routes/resource_home';
import Login from './routes/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {index: true,  element: <Index />},
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            // putting an error redirect here lets the user continue interacting with usable pieces
            errorElement:<div>Oops, an error there was</div>,
          },
          {
            path: "game_map",
            element:<Game_Map />,
          },
          {
            path: "singly-linked-lists",
            element:<Sll_Home />,
            children:[
              {path:"singly-linked-lists/articles",},
              {path:"singly-linked-lists/games",},
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
            path: "prizes",
            element:<Prizes_Home />,
          },
          {
            path: "resources",
            element:<Resources_Home />,
          },
          {
            path:"login",
            element: <Login/>
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
