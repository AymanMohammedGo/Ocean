import { ArrowRightCircle, MoveRight } from "lucide-react";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { Clinets } from "@/constants/clinet";
export default function Home() {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container">
        <Image
          src="/bg.png"
          width={1920}
          height={1080}
          alt="test"
          className="absolute -z-50 w-full h-full -top-20 left-0 opacity-10"
        />
        {/* Home section */}
        <section id="home" className="relative ">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44 -right-20 md:right-20" />

          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all">
                New Features Is Now Available.
                <ArrowRightCircle className="inline ml-1 w-4 h-4" />
              </p>
              <Heading title="A CRM dashboard for engineering teams" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Boost engineering team&rsquo;s productivity with Ocean CRM
                dashboard that streamlines project management, collaboration,
                and data-driven decision-making.
              </p>
              <div className="flex items-center gap-4">
                <Button>
                  Get started
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href="#pricing">
                  <Button variants="outline">View pricing</Button>
                </Link>
              </div>
            </div>
            <Image
              src="Hero-image.svg"
              width={670}
              height={370}
              alt="banner"
              className="mx-auto shadow-xl"
            />
          </div>
        </section>
        {/* Home section */}
        {/* Clients section */}
        <section
          id="clinets"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {Clinets.map((clinet, index) => (
            <Image
              key={index}
              src={clinet.imageUrl}
              width={120}
              height={80}
              alt={clinet.alt}
              className="w-40 md:w-full mx-auto"
            />
          ))}
        </section>
        {/* Clients section */}
      </div>
    </main>
  );
}
