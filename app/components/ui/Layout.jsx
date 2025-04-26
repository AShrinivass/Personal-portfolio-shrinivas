import { cn } from "../../lib/utils";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-[#020723]">
      {/* Background grid */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial mask fade */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Main Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
