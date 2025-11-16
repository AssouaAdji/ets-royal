import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  // In a real application, you would check for an authenticated session here.
  // For demonstration purposes, we'll simulate a check.
  const isAuthenticated = true; // Replace with actual authentication check

  if (!isAuthenticated) {
    redirect('/admin/login');
  }

  return (
    <div className="flex min-h-screen">
      {/* Admin Sidebar (if any) */}
      {/* <aside className="w-64 bg-gray-800 text-white p-4">
        <nav>
          <ul>
            <li><Link href="/admin/dashboard">Dashboard</Link></li>
            <li><Link href="/admin/users">Users</Link></li>
          </ul>
        </nav>
      </aside> */}

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
