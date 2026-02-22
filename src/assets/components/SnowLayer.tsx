import Snowfall from "react-snowfall";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export function SnowLayer() {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const [config, setConfig] = useState({
    count: 75,
    radius: [0.5, 2.5] as [number, number],
  });
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  useEffect(() => {
    const handleVisibility = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setConfig({
          count: 25,
          radius: [0.5, 1.5],
        });
      } else if (window.innerWidth < 1024) {
        setConfig({
          count: 50,
          radius: [0.5, 2.0],
        });
      } else {
        setConfig({
          count: 80,
          radius: [0.5, 2.5],
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (
    !currentTheme ||
    currentTheme === "light" ||
    !isVisible ||
    reducedMotion
  ) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[100]">
        <Snowfall
          snowflakeCount={config.count}
          radius={config.radius}
          wind={[-0.2, 0.2]}
          speed={[0.3, 1]}
          opacity={[0.15, 0.5]}
          color={"#ffffff"}
        />
      </div>
    </>
  );
}
