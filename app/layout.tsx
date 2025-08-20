import './globals.css';

export const metadata = {
  title: 'Constitution Builder',
  description: 'Designing living constitutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
