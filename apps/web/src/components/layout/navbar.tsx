import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between shadow-md p-4">
      <h1>Khati</h1>

      <nav className="flex items-center gap-4">
        <Link href={"/auth/login"}>Login</Link>
        <Link href={"/auth/register"}>Register</Link>
      </nav>
    </header>
  );
}
