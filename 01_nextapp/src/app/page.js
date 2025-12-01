import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <nav className="flex gap-20 text-xl mb-2">
        <Link href="./">Logo</Link>
        <Link href="./">Home</Link>
        <Link href="./blog">Blog</Link>
      </nav>
      <h1 className="text-xl">
        Welcome to Nextjs Crash Course
      </h1>
    </div>
  );
}
