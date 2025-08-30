import clsx from "clsx";

type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  pageTitle,
  contentTitle,
  content,
}: ErrorMessageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div
        className={clsx(
          "mb-16",
          "flex",
          "min-h-[320px]",
          "items-center",
          "justify-center",
          "rounded-xl",
          "bg-slate-900",
          "p-8",
          "text-center",
          "text-slate-100",
          "dark:bg-slate-100",
          "dark:text-slate-900",
        )}
      >
        <div>
          <h1 className="mb-4 text-7xl/tight font-extrabold">{contentTitle}</h1>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
