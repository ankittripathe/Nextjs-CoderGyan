import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Nextjs Course",
  description: "Nextjs Crash Course By CoderGyan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-20 text-xl mb-2">
          <Link href="./">Logo</Link>
          <Link href="./">Home</Link>
          <Link href="./blog">Blog</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
