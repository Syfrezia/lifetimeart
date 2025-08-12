export const SectionPill = ({ children }: { children?: React.ReactNode }) => {
  return (
    <span className="w-fit bg-[#28282C] rounded-full py-2 px-3 text-white text-[1rem] font-semibold leading-3.5">
      {children}
    </span>
  );
};
