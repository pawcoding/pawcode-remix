import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";
import title from "./images/brand/pawcode-title-inverted.svg";
import Navigation from "~/components/navigation";
import Footer from "~/components/footer";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "pawcode Development - App & Webentwicklung",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className='bg-gray-600 text-gray-50'>
        <header className='text-center mb-4'>
          <h1 className='hidden'>pawcode Development</h1>

          <Link
              prefetch='intent'
              className='block mx-auto my-5 max-w-sm w-4/5'
              to='/'
              title='pawcode Development - App & Webentwicklung'
          >
            <img
                src={title}
                className='w-full drop-shadow hover:drop-shadow-lg'
                alt='pawcode Development - App & Webentwicklung'/>
          </Link>

          <Navigation />
        </header>

        <Outlet />

        <footer className='bg-gray-500 p-4 text-right'>
          <Footer />
        </footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
