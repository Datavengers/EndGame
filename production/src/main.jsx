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
            path: "data-vengers/game_map",
            element:<Game_Map />,
          },
          {
            path: "data-vengers/singly-linked-lists",
            element:<Sll_Home />,
            children:[
              {path:"data-vengers/singly-linked-lists/articles"},
              {path:"data-vengers/singly-linked-lists/quizzes",}
            ]
          },
          {
            path:"data-vengers/singly-linked-lists/train-game",
            element:<TrainGUI />
          },
          {
            path:"data-vengers/singly-linked-lists/sll-learning",
            element:<SinglyLinkedListLearning />
          },
          {
            path: "data-vengers/doubly-linked-lists",
            element:<Dll_Home />,
            children:[
              {path:"data-vengers/doubly-linked-lists/articles",},
              {path:"data-vengers/doubly-linked-lists/games",},
              {path:"data-vengers/doubly-linked-lists/quizzes",}
            ]
          },
          {
            path: "data-vengers/doubly-linked-lists/dll-train-game",
            element:<TrainGUI_DLL />
          },
          {
            path: "data-vengers/doubly-linked-lists/dll-learning",
            element:<DoublyLinkedListLearning />
          },
          {
            path:"data-vengers/login",
            element:<Login/>,
          },
          {
            path:"data-vengers/signup",
            element:<Signup/>,
          },
          {
            path: "data-vengers/prizes",
            element:<Prizes_Home />,
          },
          {
            path: "data-vengers/sllq",
            element:<SinglyLinkedListQuiz />,
          },
          {
            path: "data-vengers/dllq",
            element: <DoublyLinkedListQuiz />
          },
          {
            path: "data-vengers/resources",
            element:<Resources_Home />,
          },
          {
            path: "data-vengers/stats",
            element:<Stats />,
          },
          {
            path: "data-vengers/account",
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
// {basename: "/data-vengers/"});
  },
],
 {basename: "/data-vengers/"});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
