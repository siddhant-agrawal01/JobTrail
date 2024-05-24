import type { Metadata } from "next";
import { dark, neobrutalism } from "@clerk/themes";

import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useClerk,
} from "@clerk/nextjs";
import "./globals.css";
import Providers from "./Providers";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import router from "next/router";
import { Url } from "next/dist/shared/lib/router/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobTrail",
  description:
    "Job application tackingraj karega khalsa system for job seekers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { signOut } = useClerk(); // Use Clerk hook for sign-out

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider
          afterSignOutUrl="/"
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-green-500 hover:bg-green-400 text-sm normal-case",
            },
          }}
        >
          <Providers>
            {/* <HeroHighlight> */}

            <div className="h-screen w-full dark:bg-black-100 bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100"></div>

              {children}
            </div>

            {/* </HeroHighlight> */}
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
