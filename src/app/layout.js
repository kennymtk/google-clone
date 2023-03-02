import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description: "Google Clone with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
