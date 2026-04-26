interface NerveLogoProps {
  size?: number;
}

export default function NerveLogo({ size = 28 }: NerveLogoProps) {
  const s = size * 0.82;
  return (
    <div
      style={{
        width: s,
        height: s,
        borderRadius: s * 0.22,
        background: "#c87941",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Georgia, Times New Roman, serif",
        fontWeight: 600,
        fontSize: s * 0.42,
        color: "#fff",
        letterSpacing: "-0.02em",
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      sa.
    </div>
  );
}
