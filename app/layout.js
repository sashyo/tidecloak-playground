// app/layout.js
import "../styles/tailwind.css";
import "../styles/spinKit.css";  // Import your spinKit styles
import { Provider } from "./context/context";
import Nav from "./components/nav";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TideCloak Demo</title>
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Provider>
          <Nav />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
