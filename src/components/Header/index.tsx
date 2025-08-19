import clsx from "clsx";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <h1
        className={clsx(
          "py-8 text-4xl/normal font-extrabold",
          "sm:py-10 sm:text-5xl/normal",
          "md:py-11 md:text-6xl/normal",
          "lg:py-12 lg:text-6xl/normal",
        )}
      >
        <Link href="#">The Blog</Link>
      </h1>
    </header>
  );
}
