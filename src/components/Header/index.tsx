import clsx from "clsx";

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
        <a href="#">The Blog</a>
      </h1>
    </header>
  );
}
