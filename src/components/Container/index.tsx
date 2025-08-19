import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className={clsx(
        "min-h-screen",
        "bg-slate-100",
        "text-slate-900",
        "dark:bg-slate-900",
        "dark:text-slate-100",
      )}
    >
      <div className="mx-auto max-w-screen-lg px-8">{children}</div>
    </div>
  );
};
