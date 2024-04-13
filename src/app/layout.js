import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GT Colombia",
  description: "Agencia de turísmo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
