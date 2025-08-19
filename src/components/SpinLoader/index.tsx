import clsx from "clsx";

type SpinLoaderProps = {
  className?: string;
};

export const SpinLoader = ({ className = "" }: SpinLoaderProps) => {
  return (
    <div className={clsx("flex", "items-center", "justify-center", className)}>
      <div
        className={clsx(
          "h-10",
          "w-10",
          "animate-spin",
          "rounded-full",
          "border-5",
          "border-slate-900",
          "border-t-transparent",
        )}
      ></div>
    </div>
  );
};
