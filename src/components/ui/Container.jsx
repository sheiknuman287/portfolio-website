function Container({ children }) {
  return (
    <div
      className="
        w-full
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        min-w-0
      "
    >
      {children}
    </div>
  );
}

export default Container;