import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description: "Google Clone with Next.js",
  icons: {
    icon: "./assets/GoogleIcon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
