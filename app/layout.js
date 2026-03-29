import "./globals.css";

export const metadata = {
  title: "Siddharth Parmar",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}