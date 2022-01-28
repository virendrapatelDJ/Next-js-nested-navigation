import React from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../../components/dashboard/Sidebar';
import AppRouter from '../../components/AppRouter/DashboardRouters';
import Users from '../../components/dashboard/users';

export default function DashBoard() {
  const router = useRouter();

  const getComponent = () => {
    switch (router.query?.paths?.[0]) {
      case 'summary':
        return <h1>Summary Component</h1>;
      case 'accounts':
        return <h1>Accounts Component</h1>;
      case 'history':
        return <h1>History Component</h1>;
      case 'users':
        return <h1>Users Component</h1>;
      case 'charts':
        return <h1>Charts Component</h1>;
      default:
        return <h1>DashBoard Component</h1>;
    }
  };

  return (
    <div className="dashboard">
      <br />
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col border rounded">
          <AppRouter path="/dashboard/users">
            <Users/>
          </AppRouter>
          <AppRouter path="/dashboard/charts">
            <h1 className="display-3">Charts Component</h1>
          </AppRouter>
          <AppRouter path="/dashboard/summary">
            <h1 className="display-3">Summary Component</h1>
          </AppRouter>
          <AppRouter path="/dashboard/accounts">
            <h1 className="display-3">Accounts Component</h1>
          </AppRouter>
          <AppRouter path="/dashboard/history">
            <h1 className="display-3">History Component</h1>
          </AppRouter>
          <AppRouter path="/dashboard" exact>
            <h1 className="display-3">Dashboard Component</h1>
          </AppRouter>
        </div>
      </div>
    </div>
  );
}
