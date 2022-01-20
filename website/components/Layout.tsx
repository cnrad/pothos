import { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MenuIcon from '@heroicons/react/outline/MenuIcon';
import { TableOfContents, Toc } from './Toc';

export function Layout({ children, toc }: { children: ReactNode; toc: TableOfContents }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Pothos GraphQL</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
        div#__next {
          padding-top: 4rem;
        }
        details > summary {
          list-style: none;
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
      <div className="h-full overflow-scroll dark:bg-gray-800">
        <header className="pl-16 pr-4 xl:pl-4 z-10 fixed top-0 bottom-0 flex w-full h-16 py-2 px-4 shadow justify-between bg-green text-white">
          <img className="h-full" src="/assets/logo-name-green.png"></img>
          <ul className="flex space-x-3 h-full flex-row items-center">
            <li>Home</li>
            <li className="underline">Docs</li>
            <li>Examples</li>
            <li>Github</li>
          </ul>
        </header>
        <details className="xl:hidden absolute top-0 z-20 h-full">
          <summary className="p-4 text-white">
            <MenuIcon className="h-8" />
          </summary>
          <Toc
            active={router.pathname}
            className="absolute py-4 xl:hidden top-16 bottom-0"
            table={toc}
          />
        </details>
        <Toc
          className="hidden xl:block absolute py-4 top-16 bottom-0"
          table={toc}
          active={router.pathname}
        />
        <div className="flex items-center">
          <section className="relative mb-16 p-8 w-full md:w-[min(75%,800px)] xl:m-auto shadow min-h-[500px] dark:bg-gray-700 dark:text-white">
            {children}
          </section>
        </div>
        <footer className="flex justify-center m-12">
          <div className="text-align-center text-coolGray-400 text-xs">
            {`© ${new Date().getFullYear()} Michael Hayes`}
          </div>
        </footer>
      </div>
    </>
  );
}
