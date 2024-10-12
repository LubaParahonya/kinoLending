 import "./globals.css";
import Navigation from './components/Navigation/page'
import Footer from './components/Footer/page'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        >
          <Navigation />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

