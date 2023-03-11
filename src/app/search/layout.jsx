import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";

export const metadata = {
  //   title: "Google Clone",
  //   description: "Google Clone with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
