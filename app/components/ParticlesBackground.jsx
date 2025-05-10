// components/ParticlesBackground.jsx
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#b26e70" },
        particles: {
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
          },
          move: { enable: true, speed: 1 },
          number: { value: 30 },
          opacity: { value: 0.2 },
          size: { value: 3 },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
