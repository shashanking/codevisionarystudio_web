import localFont from '@next/font/local';
import { Montserrat } from 'next/font/google'


import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const earth_orbiter = localFont({
  src: [
    {
      path: '../public/fonts/earth_orbiter/earthorbiter.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/earth_orbiter/earthorbiterbold.ttf',
      weight: '700'
    }
  ],
  display: 'swap',
  variable: '--font-earth_orbiter'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-base',
  display: 'swap',
})

export const metadata = {
  title: "Code Visionary Studio",
  description: "Lorem ipsum dummy text",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${earth_orbiter.variable} ${montserrat.variable}`}>
      <body>
       <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
