"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { geoEqualEarth } from "d3-geo";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "Nigeria", coordinates: [8.6753, 9.082] },
  { name: "USA", coordinates: [-95.7129, 37.0902] },
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "Brazil", coordinates: [-51.9253, -14.235] },
  { name: "United Kingdom", coordinates: [-1.1743, 52.3555] },
];

const GlobalPresence = () => {
  const [width, setWidth] = useState<number>(1024);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projection = geoEqualEarth().scale(160).translate([490, 300]);

  const getMarkerRadius = () => {
    if (width < 480) return 2.5;
    if (width < 768) return 3.2;
    if (width < 1024) return 4;
    return 4.8;
  };

  const getFontSize = () => {
    if (width < 480) return 6;
    if (width < 768) return 7;
    if (width < 1024) return 8;
    return 9;
  };

  const renderMapContent = () => {
    const from: [number, number] = [423, 267];

    const getAdjustedToCoordinates = (name: string): [number, number] => {
      switch (name) {
        case "USA":
          return [165, 170];
        case "India":
          return [600, 226];
        case "Germany":
          return [420, 130];
        case "Brazil":
          return [260, 350];
        case "United Kingdom":
          return [397, 125];
        default:
          return [0, 0];
      }
    };

    return (
      <>
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                tabIndex={-1}
                style={{
                  default: {
                    fill: "#f1f8f5",
                    stroke: "#d4e8dd",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  hover: {
                    fill: "#d9f0e6",
                    stroke: "#15803d",
                    strokeWidth: 0.6,
                  },
                  pressed: {
                    fill: "#f1f8f5",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>

        {/* Animated Arcs */}
        {markers.slice(1).map((target, i) => {
          const to = getAdjustedToCoordinates(target.name);
          const [x1, y1] = from;
          const [x2, y2] = to;

          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2;
          const curveStrength = 70;
          const angle = Math.atan2(y2 - y1, x2 - x1) - Math.PI / 2;
          const cx = midX + curveStrength * Math.cos(angle);
          const cy = midY + curveStrength * Math.sin(angle);
          const d = `M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`;

          return (
            <motion.path
              key={`arc-${i}`}
              d={d}
              fill="none"
              stroke="#22c55e"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeDasharray="3,7"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 1, 0.3],
                strokeDashoffset: [12, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.25,
              }}
            />
          );
        })}

        {/* Markers */}
        {markers.map((marker, i) => (
          <Marker key={marker.name} coordinates={marker.coordinates}>
            <motion.g
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
            >
              {/* Pulse ring for Nigeria */}
              {marker.name === "Nigeria" && (
                <motion.circle
                  r={getMarkerRadius() * 2.2}
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth={1.2}
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}

              <circle
                r={getMarkerRadius()}
                fill="#15803d"
                stroke="#ffffff"
                strokeWidth={1.4}
                style={{
                  filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.25))",
                  transition: "r 0.25s ease, filter 0.25s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter =
                    "drop-shadow(0 0 6px rgba(34,197,94,0.75))")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter =
                    "drop-shadow(0 2px 2px rgba(0,0,0,0.25))")
                }
              >
                <title>{marker.name}</title>
              </circle>

              <text
                textAnchor="middle"
                y={marker.name === "United Kingdom" ? -14 : -10}
                fontSize={getFontSize()}
                fill="#1f2937"
                style={{
                  fontWeight: 600,
                  fontFamily: `'Inter', 'Segoe UI', sans-serif`,
                }}
              >
                {marker.name}
              </text>
            </motion.g>
          </Marker>
        ))}
      </>
    );
  };

  return (
    <section className="w-full bg-white p-0 m-0 overflow-hidden">
      <div className="text-center w-full px-4 sm:px-6 lg:px-12 pt-6 pb-2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-2">
          Our Global Presence
        </h2>
        <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto">
          Our affiliation with top manufacturers across the globe makes us a
          reliable partner with access to a wide range of industrial and
          engineering spare parts to facilitate seamless operations worldwide.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full pt-0 pb-8 flex justify-center"
      >
        <div className="w-full max-w-[1800px] px-2 sm:px-4 flex">
          <div className="w-full lg:w-[90%] xl:w-[92%] 2xl:w-[90%] ml-auto">
            <ComposableMap
              projection="geoEqualEarth"
              viewBox="0 20 980 540"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                maxWidth: "100%",
              }}
            >
              {renderMapContent()}
            </ComposableMap>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GlobalPresence;
