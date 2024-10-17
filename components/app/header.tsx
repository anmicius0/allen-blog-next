import { useState, useEffect } from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

interface Page {
  label: string;
  to: string;
}

const HeaderComp: React.FC = () => {
  const pages: Page[] = [
    {
      label: "TW2024",
      to: "/tw2024",
    },
  ];

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setIsVisible(!isScrollingDown || currentScrollPos === 0);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      className={`transition-all duration-300 ${
        isVisible ? "top-0" : "-top-16"
      } bg-white shadow-md z-50`}
    >
      <Toolbar className="container mx-auto px-4">
        <Link href="/" className="text-decoration-none">
          <Typography
            variant="h5"
            className="text-gray-900 text-2xl font-semibold"
          >
            ALLEN SPRING
          </Typography>
        </Link>
        <Box className="flex-1" />
        <div className="flex space-x-4">
          {pages.map((page) => (
            <Button
              key={page.label}
              component={Link}
              href={page.to}
              className="text-gray-900 text-lg font-normal"
            >
              {page.label}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComp;
