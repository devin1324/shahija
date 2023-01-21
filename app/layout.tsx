import "./globals.css";
import Navigation from "./components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
