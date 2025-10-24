import { Spinner as SpinnerUI } from "../ui/spinner";

export function Spinner() {
  return (
    <div className="flex items-center gap-6">
      <SpinnerUI className="size-20 text-[#9d76b7]" />
    </div>
  );
}
