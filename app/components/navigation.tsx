import { Link } from "@remix-run/react";

const links = [
    { href: '/', title: 'Home' },
    { href: '/news', title: 'News' },
    { href: '/projekte', title: 'Projekte' }
]

export default function Navigation() {
    return (
        <nav className='bg-gray-500 py-4 px-2'>
            {links.map(l =>
                <Link
                    prefetch='intent'
                    className='!block xs:!inline-block mx-0 mt-0 mb-2 xs:my-1 button'
                    key={l.title}
                    to={l.href}
                    title={l.title}
                >
                    {l.title}
                </Link>)
            }
        </nav>
    )
}