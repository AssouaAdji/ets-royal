'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">Page non trouvée</p>
      <p className="text-gray-500 dark:text-gray-500 mt-2">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <Link href="/">
        <Button className="mt-6">Retour à l'accueil</Button>
      </Link>
    </div>
  );
}
