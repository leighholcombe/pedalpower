import Swatches from "./components/swatches";
import Chips from "./components/chips";
import ParamTest from "./components/paramtest";
import Deck from "./components/deck";
import { Suspense } from "react";
import Link from 'next/link';

export default function Home(pageProps:any) {

  return (
    <div className="flex max-w-full">
      <main className="pb-12">
        <section id="gallery" className="my-6">
          <Suspense>
            <Deck {...pageProps}></Deck>
          </Suspense>
        </section>
        <section id="test" className="my-6">
          <Suspense>
            <ParamTest {...pageProps}></ParamTest>
          </Suspense>
        </section>
        <section id="browse" className="my-6"></section>
        <section id="chips" className="my-6">
          <Suspense>
            <Chips {...pageProps}></Chips>
          </Suspense>
        </section>
        <section id="swatches" className="my-6">
          <Suspense>
            <Swatches {...pageProps}></Swatches>
          </Suspense>
        </section>
        <section id="morelinks" className="my-6 flex gap-3 flex-wrap">
          <Link
            href="/"
            className="text-neutral-800 rounded-full block py-2 px-4 whitespace-nowrap hover:bg-sky-300 bg-sky-200 max-w-min"
          >
            Reset
          </Link>
          <Link
            href="everything"
            className="text-neutral-800 rounded-full block py-2 px-4 whitespace-nowrap hover:bg-sky-300 bg-sky-200 max-w-min"
          >
            See Everything
          </Link>
        </section>
      </main>
    </div>
  );
}
