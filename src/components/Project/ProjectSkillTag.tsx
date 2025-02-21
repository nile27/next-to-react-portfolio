const ProjectSkillTag = (props: { isDark: boolean; children: string }) => {
  const { isDark, children } = props;
  return (
    <div
      className={`${
        isDark
          ? "text-DText border-DMainPurple"
          : "text-LText border-LMainPurple"
      } gap-2 flex flex-col text-[12px] tablet:text-[10px]  justify-center items-center w-auto h-auto px-[15px] py-[5px] rounded-lg border-[1px] hover:scale-110 duration-150 hover:ring-1 `}
    >
      {children}
    </div>
  );
};

export default ProjectSkillTag;
