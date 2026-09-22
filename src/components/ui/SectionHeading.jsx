function SectionHeading({
  title,
  subtitle,
}) {
  return (
    <div className="text-center mb-16">
      <p className="text-cyan-400 font-semibold uppercase tracking-[0.3em] text-sm">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold text-white mt-4">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;