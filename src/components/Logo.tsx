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

  const src = variant === "light"
    ? "/images/logos/logo-white.svg"
    : "/images/logos/logo-dark.svg";

  return (
    <img
      src={src}
      alt="Gründer Marketing"
      className={`${sizes[size]} w-auto object-contain`}
    />
  );
}
