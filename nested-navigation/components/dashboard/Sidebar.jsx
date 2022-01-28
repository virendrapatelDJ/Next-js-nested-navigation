import Link from 'next/link';
import React from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link href="/dashboard/charts">Charts</Link>
      <Link href="/dashboard/accounts">Accounts</Link>
      <Link href="/dashboard/summary">Summry</Link>
      <Link href="/dashboard/history">History</Link>
      <Link href="/dashboard/users">User</Link>
    </div>
  );
}
