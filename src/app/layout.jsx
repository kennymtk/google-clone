import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description: "Google Clone with Next.js",
  icons: {
    icon: "GoogleIcon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
