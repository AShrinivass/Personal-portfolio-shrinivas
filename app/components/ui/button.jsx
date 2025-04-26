import React from "react";

function Button({ className = "", asChild = false, ...props }) {
  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 ${className}`}
      {...props}
    />
  );
}

export { Button };
