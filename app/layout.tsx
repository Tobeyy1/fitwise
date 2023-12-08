import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Poppins } from "next/font/google";
import AppWrapper from "./components/AppWrapper/AppWrapper";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["100", "400", "900"], subsets: ["latin"] });

export const metadata = {
  title: "Fitwise",
  description: "Fitwise Gym Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={poppins.className}>
          <AppWrapper>{children}</AppWrapper>
        </body>
      </html>
    </Providers>
  );
}
