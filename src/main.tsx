import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.tsx';
import { AddVisit } from './pages/AddVisit.tsx';
import { CustomersVisits } from './pages/CustomersVisits.tsx';
import { EditVisit } from './pages/EditVisit.tsx';
import { Manage } from './pages/Manage.tsx';
import { Mechanics } from './pages/Mechanics.tsx';
import { ServiceParts } from './pages/ServiceParts.tsx';
import { Services } from './pages/Services.tsx';
import { Settings } from './pages/Settings.tsx';
import { ViewVisit } from './pages/ViewVisit.tsx';
import { VisitLabels } from './pages/VisitLabels.tsx';
import { SearchVisit } from './pages/SearchVisit.tsx';
import { NotFound } from './pages/NotFound.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound/>
  },
  {
    path: '/add-visit',
    element: <AddVisit />,
    errorElement: <NotFound/>
  },
  {
    path: '/customers-visits',
    element: <CustomersVisits />,
    errorElement: <NotFound/>
  },
  {
    path: '/edit-visit',
    element: <EditVisit />,
    errorElement: <NotFound/>
  },
  {
    path: '/edit-visit/:id',
    element: <EditVisit />,
    errorElement: <NotFound/>
  },
  {
    path: '/manage',
    element: <Manage />,
    errorElement: <NotFound/>
  },
  {
    path: '/mechanics',
    element: <Mechanics />,
    errorElement: <NotFound/>
  },
  {
    path: '/service-parts',
    element: <ServiceParts />,
    errorElement: <NotFound/>
  },
  {
    path: '/services',
    element: <Services />,
    errorElement: <NotFound/>
  },
  {
    path: '/settings',
    element: <Settings />,
    errorElement: <NotFound/>
  },
  {
    path: '/view-visit',
    element: <ViewVisit />,
    errorElement: <NotFound/>
  },
  {
    path: '/view-visit/:id',
    element: <ViewVisit />,
    errorElement: <NotFound/>
  },
  {
    path: '/visit-labels',
    element: <VisitLabels />,
    errorElement: <NotFound/>
  },
  {
    path: '/search-visit',
    element: <SearchVisit />,
    errorElement: <NotFound/>
  },
 
]);

createRoot(document.getElementById('root')!).render(
  < StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
