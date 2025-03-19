import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg"
import LandingImg from "@/assets/main.svg"
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="logo " />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen grid lg:grid-cols-[1fr_400px] items-center">
      <div>
        <h1 className="capitalize text-4xl md:text-7xl font-bold">
          employment <span className="text-primary">tracker</span> app
        </h1>
        <p className="leading-loose max-w-md mt-4">
  NextRole is your all-in-one job application tracking tool designed to simplify and streamline your job search. Stay organized by managing your applications, deadlines, and follow-ups in one place. With NextRole, you can track your progress, stay motivated, and ensure you're always one step ahead in your career journey.
</p>
<Button asChild className="mt-4">
    <Link href="/add-job">Get Started</Link>
</Button>
      </div>
      <Image src={LandingImg} alt="landing" className="hidden lg:block" />
      </section> 
    </main>
  );
}
