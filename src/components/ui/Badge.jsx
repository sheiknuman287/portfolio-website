function Badge({ children }) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-cyan-500/30
      bg-cyan-500/10
      px-4
      py-2
      text-sm
      font-medium
      text-cyan-300
      backdrop-blur-md
      transition-all
      duration-300
      hover:scale-105
      hover:bg-cyan-500/20
      "
    >
      {children}
    </span>
  );
}

export default Badge;