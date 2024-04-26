// import font "Inter" từ gói "next/font/google", sử dụng font này trong ứng dụng.
import { Inter } from "next/font/google";
// import để áp dụng các kiểu CSS toàn cục cho ứng dụng, có thể là các kiểu mặc định hoặc được tùy chỉnh cho toàn bộ ứng dụng.
import "./globals.css";
// import các components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute = 'class' defaultTheme = 'light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
