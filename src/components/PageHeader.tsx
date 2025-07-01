import { useLocation } from 'react-router-dom';

export function PageHeader() {
  const location = useLocation();
  
  // Map routes to page titles
  const getPageTitle = (pathname: string): string => {
    const routes: { [key: string]: string } = {
      '/': 'Home',
      '/add-visit': 'Add New Visit',
      '/customers-visits': 'Customer Visits',
      '/edit-visit': 'Edit Visit',
      '/manage': 'Manage',
      '/mechanics': 'Mechanics',
      '/service-parts': 'Service Parts',
      '/services': 'Services',
      '/settings': 'Settings',
      '/view-visit': 'View Visit',
      '/visit-labels': 'Visit Labels',
      '/search-visit': 'Search Visits'
    };

    // Handle dynamic routes (with parameters)
    if (pathname.startsWith('/edit-visit/')) {
      return 'Edit Visit';
    }
    if (pathname.startsWith('/view-visit/')) {
      return 'View Visit';
    }

    return routes[pathname] || 'Page Not Found';
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <header>
      <h1>{pageTitle}</h1>
    </header>
  );
}