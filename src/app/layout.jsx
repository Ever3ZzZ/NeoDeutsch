import Header from '../components/Header';
import Footer from '../components/Footer';
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'NeoDeutsch — онлайн школа немецкого языка',
  description: 'Онлайн школа немецкого языка A1–B2',
  verification: {
    google: 'SMuZj6QFoeW57BuWKLMJcIQTGnJ2Y79Yiqq-tOtbM3c',
  },
};

export default function Layout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

         {/* ВАЖНО: analytics должен быть тут */}
        <Analytics />
      </body>
    </html>
  );
}
