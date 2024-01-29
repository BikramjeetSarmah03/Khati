interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex items-center justify-center h-full bg-gray-100">
      {children}
    </main>
  );
}
