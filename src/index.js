import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './page/ErrorPage';
import HomePage from './page/HomePage';
import Loginpage from './page/Loginpage';
import AccountPage from './page/AccountPage';
import TransportPage from './page/TransportPage';
import MaishiyPage from './page/MaishiyPage';
import UyPage from './page/UyPage';
import YerMulkPage from './page/YerMulkPage';
import BoshqaPage from './page/BoshqaPage';
import MalumotPage from './page/MalumotPage';
import IjaraPage from './page/IjaraPage';
import SingUp from './page/SingUp';
const appRouter =createBrowserRouter([{
  element:<App/>,
  path:'/',
  errorElement:<ErrorPage/>,
  children:[{
    path:'/',
    element:<HomePage/>
  },
 
  {
    path:'/account',
    element:<AccountPage/>
  },
  {
    path:'/Transport',
    element:<TransportPage/>
  },
  {
    path:'/Maishiy',
    element:<MaishiyPage/>

  },
  {
    path:'/uy',
    element:<UyPage/>
  },
  {
    path:'/yer',
    element:<YerMulkPage/>
  },
  {
    path:"/boshqa",
    element:<BoshqaPage/>
  },
  {
    path:"/malumot",
    element:<MalumotPage/>
  },
  {
    path:'/ijara',
    element:<IjaraPage/>
  }

  ]
},
{
  path:'/login',
  element:<Loginpage/>
  
},
{
  path:"/ro'yxat",
  element:<SingUp/>
  
},
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

