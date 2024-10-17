"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import Header from "../components/app/header";
import Footer from "../components/app/footer";
import "./globals.css";
import Stack from "@mui/material/Stack";

// Define a more stylish theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000", // Black for primary elements
    },
    secondary: {
      main: "#f5f5f5", // Light gray for secondary elements
    },
    background: {
      default: "#fff", // White background
    },
    text: {
      primary: "#000", // Black text
      secondary: "#555", // Dark gray for secondary text
    },
  },
  typography: {
    fontFamily: "MiSans",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'MiSans';
          src: url('/MiSans-Regular.ttf') format('truetype'); /* Adjust path if needed */
          font-weight: normal;
          font-style: normal;
        }

        body {
          font-family: 'MiSans';
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px", // Rounded buttons
          textTransform: "none", // No uppercase by default
        },
      },
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <html lang="en">
          <body>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <Header />
              <main>
                <Stack
                  spacing={2}
                  className="px-4 py-36 md:px-8 lg:px-24 justify-center text-center"
                >
                  {/* Added padding for better content spacing */}
                  {children}
                </Stack>
              </main>
              <Footer />
            </AppRouterCacheProvider>
          </body>
        </html>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
