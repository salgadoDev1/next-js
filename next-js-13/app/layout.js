import "../src/styles/globals.css";
import { Header } from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Esta es mi page con next</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
