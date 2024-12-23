// app/layout.tsx
import './globals.css'; // Import your global styles
import Header from '../components/ui/Header'; // Ensure this is the correct import path

export const metadata = {
  title: 'Blog',
  description: 'A blog site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header is included only here */}
        <Header />
        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
