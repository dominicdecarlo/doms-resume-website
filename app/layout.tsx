import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Cursor } from "@/components/cursor";
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Dominic DeCarlo — CS & Data Science",
  description:
    "Computer Science & Data Science student at the University of Pittsburgh. Building at the intersection of AI, ML, and development.",
  metadataBase: new URL("https://dominicdecarlo.vercel.app"),
};

// Inlined into <head> so it runs before paint. Reads the saved theme
// from localStorage and writes data-theme on <html> before React hydrates.
const themeInitScript = `
(function(){
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <div className="grain" />
          <Cursor />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
