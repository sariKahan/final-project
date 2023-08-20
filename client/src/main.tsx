import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Sign_in } from './components/sign_in.tsx';
import { Sign_up } from './components/sign_up.tsx';
import { Home } from './components/home.tsx';
import { AddCategory } from './components/add_category.tsx';
import { AddImages } from './components/add_images.tsx';
import { ShowImages } from './components/show_images.tsx';
import { AddPerson } from './components/add_person.tsx';
import { ShowAllCategories } from './components/show_all_categories.tsx';
import { ShowPersons } from './components/show_persons.tsx';
import { UpdateImage } from './components/update_image.tsx';
import { Welcome } from './components/welcome.tsx';
import { BigImage } from './components/big_image.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{
      path: '',
      Component: Welcome
    },{
      path: 'sign-in',
      Component: Sign_in
    }, {
      path: 'sign-up',
      Component: Sign_up
    }, {
      path: 'home',
      Component: Home,
      children: [
        {
          path: 'show-images',
          Component: ShowImages
        },
        {
          path: 'show-images-big',
          Component: BigImage
        },
        {
          path: 'show-categories',
          Component: ShowAllCategories
        },
        {
          path: 'show-persons',
          Component: ShowPersons
        },
        {
          path: 'add-category',
          Component: AddCategory
        },
        {
          path: 'add-images',
          Component: AddImages
        },
        {
          path: 'add-person',
          Component: AddPerson
        },
      ]
    },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)
