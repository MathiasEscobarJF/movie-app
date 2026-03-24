import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/Header";

export const metadata: Metadata = {
  title: "Movie App",
  description: "Search movies and series",
  authors: [{name: "Mathias Escobar"}],
};

function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col text-amber-50 antialiased">
        <Header />
        <main className="bg-violet-900 flex-1 md:px-3 xl:px-65 pt-9">
          {children}
        </main>
        <footer className="mt-auto bg-black text-center py-3">
          <p>Movie search application developed using the OMDb API by Mathias Escobar</p>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;