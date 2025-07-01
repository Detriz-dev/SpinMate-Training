import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { PageHeader } from './PageHeader';

export function Layout() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader />
        <Outlet />
      </main>
    </>
  );
}