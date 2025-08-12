import { ArrowUpRightIcon } from "lucide-react";

export const Button = ({ children }: { children?: React.ReactNode }) => {
  return (
    <button className="bg-white/10 text-white px-4 py-2.5 rounded-full flex items-center gap-6 hover:bg-gray-500 transition-colors w-fit backdrop-blur-2xl">
      <span className="font-medium">{children}</span>

      <span className="size-10 rounded-full flex justify-center items-center bg-white text-black">
        <ArrowUpRightIcon className="size-5" />
      </span>
    </button>
  );
};
