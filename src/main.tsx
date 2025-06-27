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
import { Search } from './pages/SearchVisit.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/add-visit',
    element: <AddVisit />,
  },
  {
    path: '/customers-visits',
    element: <CustomersVisits />,
  },
  {
    path: '/edit-visit',
    element: <EditVisit />,
  },
  {
    path: '/manage',
    element: <Manage />,
  },
  {
    path: '/mechanics',
    element: <Mechanics />,
  },
  {
    path: '/service-parts',
    element: <ServiceParts />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/view-visit',
    element: <ViewVisit />,
  },
  {
    path: '/view-visit/:id',
    element: <ViewVisit />,
  },
  {
    path: '/visit-labels',
    element: <VisitLabels />,
  },
  {
    path: '/search',
    element: <Search />,
  },
]);

createRoot(document.getElementById('root')!).render(
  < StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
