function Button({
  children,
  variant = "primary",
  onClick,
  href,
}) {
  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-purple-600 hover:bg-purple-700 text-white",

    outline:
      "border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyle} ${variants[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;