export default function SectionDivider({
  from = "white",
  to = "section-alt",
  flip = false,
}: {
  from?: string;
  to?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
      style={{ marginTop: "-1px", marginBottom: "-1px" }}
    >
      <svg
        className="w-full h-8 sm:h-12"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 0L60 4C120 8 240 16 360 22C480 28 600 32 720 30C840 28 960 20 1080 16C1200 12 1320 12 1380 12L1440 12V48H1380C1320 48 1200 48 1080 48C960 48 840 48 720 48C600 48 480 48 360 48C240 48 120 48 60 48H0V0Z"
          className={`fill-${to}`}
        />
      </svg>
    </div>
  );
}
