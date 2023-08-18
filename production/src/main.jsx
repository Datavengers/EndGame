import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/Reset.css'
import './styles/index.css'
import './styles/gameMapStyles.css'
import './styles/loginStyles.css'
import './styles/trainStyles.css'
import './styles/quizStyles.css'
import './styles/statsStyles.css'
import './styles/accountStyles.css'
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
import TrainGUI from './routes/Train';
import TrainGUI_DLL from './lesson2/TrainDLL';
import SinglyLinkedListQuiz from './routes/singlyLinkedListQuiz';
import SinglyLinkedListLearning from './routes/sll_learning';
import Stats from './routes/stats';
import Account from './routes/account';
import DoublyLinkedListLearning from './routes/dll_learning';
import DoublyLinkedListQuiz from './routes/doublyLinkedListQuiz';

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
            path: "/game_map",
            element:<Game_Map />,
          },
          {
            path: "/singly-linked-lists",
            element:<Sll_Home />,
            children:[
              {path:"/singly-linked-lists/articles"},
              {path:"/singly-linked-lists/quizzes",}
            ]
          },
          {
            path:"/singly-linked-lists/train-game",
            element:<TrainGUI />
          },
          {
            path:"/singly-linked-lists/sll-learning",
            element:<SinglyLinkedListLearning />
          },
          {
            path: "/doubly-linked-lists",
            element:<Dll_Home />,
            children:[
              {path:"/doubly-linked-lists/articles",},
              {path:"/doubly-linked-lists/games",},
              {path:"/doubly-linked-lists/quizzes",}
            ]
          },
          {
            path: "/doubly-linked-lists/dll-train-game",
            element:<TrainGUI_DLL />
          },
          {
            path: "/doubly-linked-lists/dll-learning",
            element:<DoublyLinkedListLearning />
          },
          {
            path:"/login",
            element:<Login/>,
          },
          {
            path:"/signup",
            element:<Signup/>,
          },
          {
            path: "/prizes",
            element:<Prizes_Home />,
          },
          {
            path: "/sllq",
            element:<SinglyLinkedListQuiz />,
          },
          {
            path: "/dllq",
            element: <DoublyLinkedListQuiz />
          },
          {
            path: "/resources",
            element:<Resources_Home />,
          },
          {
            path: "/stats",
            element:<Stats />,
          },
          {
            path: "/account",
            element:<Account />,
          },
          {
            // This should keep a bad URL error confined within the page boundaries
            path:"*",
            element:<ErrorPage/>
          }
        ],
      },
    ],
// {basename: "/data-vengers"});
  },
],
 {basename: "/data-vengers"});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
