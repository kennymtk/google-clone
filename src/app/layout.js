import "./globals.css";
// import { Favicon } from "./components/svgs";

export const metadata = {
  title: "Google Clone",
  description: "Google Clone with Next.js",
  // icons: {
  //   icon: Favicon,
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
