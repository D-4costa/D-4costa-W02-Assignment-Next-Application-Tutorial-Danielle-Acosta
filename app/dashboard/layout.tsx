import type { ReactNode } from 'react';

import SideNav from '../ui/dashboard/sidenav';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <div style={{ display: 'flex' }}>
      <SideNav />
      <div style={{ padding: 40, flex: 1 }}>{children}</div>
    </div>
  );
}
