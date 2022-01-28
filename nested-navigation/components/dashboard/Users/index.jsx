import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import DashboardRouters from '../../AppRouter/DashboardRouters';
import DashboardUserRouters from '../../AppRouter/DashboardUserRouter';

export default function Users() {
  const baseUrl = '/dashboard/users';
  return (
    <div>
      <nav className="nav">
        <div className="nav-link">
          <Link href={`${baseUrl}/password`}>Password</Link>
        </div>

        <div className="nav-link">
          <Link href={`${baseUrl}/general`}>General</Link>
        </div>
        <div className="nav-link">
          <Link href={`${baseUrl}/security`}>Security</Link>
        </div>
      </nav>

      <DashboardRouters path={`${baseUrl}`} exact>
        <h1>You Are On User Section </h1>
      </DashboardRouters>
      <DashboardRouters path={`${baseUrl}/password`} exact>
        <h1>Password Component</h1>
      </DashboardRouters>
      <DashboardRouters path={`${baseUrl}/general`} exact>
        <h1>General Component</h1>
      </DashboardRouters>
      <DashboardRouters path={`${baseUrl}/security`} exact>
        <h1>Security Component</h1>
      </DashboardRouters>
    </div>
  );
}
