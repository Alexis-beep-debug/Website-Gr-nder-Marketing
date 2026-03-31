export default function Logo({
  variant = "dark",
  size = "default",
}: {
  variant?: "dark" | "light";
  size?: "small" | "default" | "large";
}) {
  const sizes = {
    small: "h-8",
    default: "h-10",
    large: "h-14",
  };

  // 1.png = green logo for light backgrounds
  // 3.png = white logo for dark backgrounds
  const src = variant === "light"
    ? "/images/team/3.png"
    : "/images/team/1.png";

  return (
    <img
      src={src}
      alt="Gründer Marketing"
      className={`${sizes[size]} w-auto object-contain`}
    />
  );
}
