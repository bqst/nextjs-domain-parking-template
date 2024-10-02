import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const host = headers().get("host");

  return {
    title: `${host} is for sale`,
    description:
      "This domain may be for sale, contact us for more information.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <footer className="flex items-center justify-center w-full h-16 border-t border-gray-200">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Made with{" "}
            <Link href="https://github.com/bqst/nextjs-domain-parking-template">
              nextjs-domain-parking-template
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
