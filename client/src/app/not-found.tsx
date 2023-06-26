import Link from "next/link";

export const metadata = {
  title: "Khati: Not Found",
  description: "MERN Ecommerce Not Found Page",
};

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-172px)] flex flex-col items-center justify-center space-y-16">
      <h1 className="text-5xl font-bold md:text-9xl">404</h1>
      <p className="text-xl md:text-2xl">Oops ! Page Not Found</p>

      <Link
        href={"/"}
        className="p-4 transition-all duration-500 border hover:shadow-md hover:bg-gray-100">
        Go Back
      </Link>
    </main>
  );
}
