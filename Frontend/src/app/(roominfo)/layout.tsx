import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { getServerSession } from "next-auth/next";
import ReduxProvider from "@/redux/ReduxProvider";
import BottomBar from "@/components/BottomBar";

const bai_jamjuree = Bai_Jamjuree({
  subsets: ['latin', 'latin-ext', 'thai'],
  weight: ["200", "300", "400", "500", "600", "700"]
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bai_jamjuree.className}>
        <ReduxProvider>
          <NextAuthProvider session={ nextAuthSession }>
            <TopMenu/>
            {children}
            <BottomBar/>
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
