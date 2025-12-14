import Header from '../components/Header';
import Footer from '../components/Footer';
import "./globals.css";

export const metadata = {
  title: 'NeoDeutsch',
  description: 'Онлайн школа немецкого языка',
};

export default function layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}