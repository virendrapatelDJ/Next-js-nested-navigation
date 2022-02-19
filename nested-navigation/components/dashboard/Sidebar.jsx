import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <Link href="/dashboard/charts">Charts</Link>
      </li>
      <li className="list-group-item">
        <Link href="/dashboard/articles">Articles</Link>
      </li>
      <li className="list-group-item">
        <Link href="/dashboard/accounts">Accounts</Link>
      </li>
      <li className="list-group-item">
        <Link href="/dashboard/summary">Summry</Link>
      </li>
      <li className="list-group-item">
        <Link href="/dashboard/history">History</Link>
      </li>
      <li className="list-group-item">
        <Link href="/dashboard/users">User</Link>
      </li>
    </ul>
  );
}
