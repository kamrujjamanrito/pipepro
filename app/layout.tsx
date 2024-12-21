import type { Metadata } from "next";

// bootstrap five
import "bootstrap/dist/css/bootstrap.min.css";
// font awesome 6
import "@/public/icons/css/all.min.css";
// modal video
import "yet-another-react-lightbox/styles.css";
// main styles
import "@/public/scss/main.scss";
// init animations
import InitAnimations from "@/components/layout/InitAnimations";
// custom cursor
import CustomCursor from "@/components/layout/CustomCursor";
// scroll indicator
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

export const metadata: Metadata = {
  title: "Pipepro - Handyman & Plumber React NextJs Template",
  description: "Handyman & Plumber React NextJs Template",
  keywords: [
    "creative",
    "digital",
    "multipage",
    "landing",
    "freelancer",
    "Typescript",
    "React",
    "nextjs",
  ],
  authors: [
    {
      name: "Apolo-Theme",
      url: "https://themeforest.net/user/apolo-theme",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children} <InitAnimations />
        <CustomCursor />
        <ScrollProgressButton />
      </body>
    </html>
  );
}
