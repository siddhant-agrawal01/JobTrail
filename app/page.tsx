import Image from "next/image";
import Logo from "../assets/logo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";


import {GlobeDemo} from "@/components/ui/GlobeDemo";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <header className="max-w-6xl mx-auto mt-8  px-4 sm:px-8 py-6 ">
        <Image src={Logo} alt="logo" />
      </header>
      <section className=" max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4 ">
            Easily track all your job applications, from companies and positions
            to interview status and offers. Stay organized and get insights into
            your job search with detailed statistics. Simplify your job hunt
            with JobTrail.
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <GlobeDemo />
       
      </section>
    </main>
  );
}
