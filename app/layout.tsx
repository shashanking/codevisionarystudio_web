import localFont from "@next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const earth_orbiter = localFont({
  src: [
    {
      path: "../public/fonts/earth_orbiter/earthorbiter.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/earth_orbiter/earthorbiterbold.ttf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-earth_orbiter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-base",
  display: "swap",
});

export const metadata = {
  title: "Code Visionary Studio",
  description: "Lorem ipsum dummy text",
};

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${earth_orbiter.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
