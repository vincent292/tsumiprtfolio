import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top left, rgba(72,135,214,0.24), transparent 26%), linear-gradient(180deg, #08111d 0%, #0b1623 100%)",
          color: "#f8fbff",
          padding: "56px",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            opacity: 0.25,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-60px",
            top: "-40px",
            width: "260px",
            height: "260px",
            borderRadius: "999px",
            background: "rgba(66, 160, 194, 0.18)",
            filter: "blur(18px)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "72px",
                height: "72px",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.08)",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              TS
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  opacity: 0.76,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                }}
              >
                Tsumi
              </span>
              <span style={{ fontSize: "18px", opacity: 0.68 }}>
                Diseño y desarrollo web con estructura real
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "860px",
              gap: "22px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "66px",
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.06em",
              }}
            >
              Sitios y sistemas web que se ven serios y funcionan mejor
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "28px",
                lineHeight: 1.35,
                color: "rgba(248,251,255,0.72)",
              }}
            >
              Tsumi diseña productos web para marcas, instituciones y negocios
              que necesitan presencia sólida y una base lista para crecer.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "18px",
            }}
          >
            {["Next.js", "TypeScript", "Tailwind CSS", "GSAP"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.06)",
                  padding: "12px 20px",
                  fontSize: "18px",
                  color: "rgba(248,251,255,0.86)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
