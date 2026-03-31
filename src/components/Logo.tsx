export default function Logo({
  variant = "dark",
  size = "default",
}: {
  variant?: "dark" | "light";
  size?: "small" | "default" | "large";
}) {
  const sizes = {
    small: { img: "h-7", gap: "gap-2" },
    default: { img: "h-9", gap: "gap-2.5" },
    large: { img: "h-11", gap: "gap-3" },
  };
  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.gap}`}>
      <img
        src="/images/logos/logo.png"
        alt="Gründer Marketing"
        className={`${s.img} w-auto object-contain shrink-0 ${
          variant === "light" ? "brightness-0 invert" : ""
        }`}
      />
    </div>
  );
}
