import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";

export default async function Home() {
  return (
    <div>
      <SpinLoader className={clsx("h-[500px]", "bg-amber-500")} />
    </div>
  );
}
