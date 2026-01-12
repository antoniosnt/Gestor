export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-900 h-screen max-h-screen">
      {children}
    </div>
  );
}
