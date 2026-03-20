import type { Metadata } from "next";
import "./globals.css";
import SearchInput from "./ui/SearchInput";
import NavBar from "@/app/ui/NavBar";
import Link from "next/link";
import { HomeIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Suspense } from "react";

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
        <header className="bg-violet-500 flex flex-col gap-6 items-center py-3 relative">
          <div className="w-full flex md:w-fit md:block md:absolute md:left-3">
            <Link
              href="/"
              className="p-2 flex border-2 border-transparent rounded-lg hover:border-amber-50 active:opacity-80"
            >
              <ChevronLeftIcon className="w-6" />
              <HomeIcon className="w-6 md:hidden"/>
              <p className="hidden md:block">Go to Home</p>
            </Link>
          </div>
          <Suspense>
            <SearchInput />
          </Suspense>
          <NavBar />
        </header>
        <main className="bg-violet-900 flex-1 xl:px-65 pt-9">
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