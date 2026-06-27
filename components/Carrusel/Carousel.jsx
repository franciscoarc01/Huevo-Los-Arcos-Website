import { useState } from "react";
import { Link } from "react-router-dom";

export function Carousel({ images, visible, isMobile }) {
  const [current, setCurrent] = useState(0);
  const maxIndex = images.length - visible; // último desplazamiento posible

  const prev = () => setCurrent((i) => Math.max(0, i - 1));
  const next = () => setCurrent((i) => Math.min(maxIndex, i + 1));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: isMobile ? "97dvw" : "72dvw",
        height: "auto",
        fontFamily: "system-ui",
        paddingRight: "1.5%",
        paddingLeft: "1.5%",
      }}
    >
      {/* Botón izquierdo, pegado a la primera imagen */}
      <button
        onClick={prev}
        disabled={current === 0}
        aria-label="Anterior"
        style={btnStyle(current === 0)}
      >
        ‹
      </button>

      {/* Ventana visible: solo muestra VISIBLE imágenes */}
      <div style={{ overflow: "hidden", flex: 1 }}>
        {/* Pista con TODAS las slides en fila */}
        <div
          style={{
            display: "flex",
            transform: `translateX(-${current * (100 / visible)}%)`,
            transition: "transform 0.45s cubic-bezier(.4,0,.2,1)",
            alignItems: "anchor-center"
          }}
        >
          {images?.map((image) => (
            <div
              key={image.id}
              style={{
                flex: `0 0 ${100 / visible}%`, // cada slide = un tercio del marco
                boxSizing: "border-box",
                paddingRight: "1.5%",
                paddingLeft: "1.5%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  borderRadius: 7,
                  overflow: "hidden",
                }}
              >
                <Link to={image.url}>
                  <img
                    src={image.path}
                    alt={image.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // recorta sin deformar
                      display: "block",
                    }}
                  />
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botón derecho, pegado a la última imagen */}
      <button
        onClick={next}
        disabled={current === maxIndex}
        aria-label="Siguiente"
        style={btnStyle(current === maxIndex)}
      >
        ›
      </button>
    </div>
  );
}

const btnStyle = (disabled) => ({
  flex: "0 0 auto",
  width: 44,
  height: 44,
  borderRadius: "50%",
  border: "none",
  background: disabled ? "#e2e8f0" : "black",
  color: disabled ? "#94a3b8" : "#fff",
  fontSize: 26,
  cursor: disabled ? "default" : "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: disabled ? "none" : "0 2px 8px rgba(0,0,0,.2)",
  transition: "background .2s",
});
