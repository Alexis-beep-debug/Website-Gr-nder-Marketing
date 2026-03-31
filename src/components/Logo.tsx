export default function Logo({
  variant = "dark",
  size = "default",
}: {
  variant?: "dark" | "light";
  size?: "small" | "default" | "large";
}) {
  const sizes = {
    small: { box: "w-7 h-7", text: "text-sm", sub: "text-[8px]", gap: "gap-2" },
    default: { box: "w-9 h-9", text: "text-base", sub: "text-[10px]", gap: "gap-2.5" },
    large: { box: "w-11 h-11 text-lg", text: "text-lg", sub: "text-xs", gap: "gap-3" },
  };
  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.gap}`}>
      <div
        className={`${s.box} bg-accent rounded-lg flex items-center justify-center text-white font-bold shrink-0`}
      >
        G
      </div>
      <div className="leading-tight">
        <span
          className={`font-bold ${s.text} block ${
            variant === "light" ? "text-white" : "text-primary"
          }`}
        >
          Gründer
        </span>
        <span
          className={`${s.sub} font-semibold tracking-widest uppercase ${
            variant === "light" ? "text-accent-light" : "text-accent"
          }`}
        >
          Marketing
        </span>
      </div>
    </div>
  );
}
