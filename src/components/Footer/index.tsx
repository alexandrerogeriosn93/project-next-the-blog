import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-16 text-center">
      <p>
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link
          className="transition hover:text-slate-500 dark:hover:text-slate-500"
          href="/"
        >
          The Blog
        </Link>
      </p>
    </footer>
  );
}
