export const metadata = {
  title: 'Siddharth Parmar',
  description: 'Technical Lead, Delivery Manager, and Project Leader portfolio website.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
