import React from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../../components/dashboard/Sidebar';

export default function DashBoard() {
  const router = useRouter();

  const getComponent = () => {
    switch (router.query.paths[0]) {
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
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div>
        <main>{getComponent()}</main>
      </div>
    </div>
  );
}
