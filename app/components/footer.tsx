import {Link} from "@remix-run/react";

export default function Footer() {
    return (
        <span className='font-bold'>
            &copy; {new Date().getFullYear() + ' '}
            <Link
                prefetch='intent'
                to='/'
                title='Startseite'
            >
                pawcode Development
            </Link>
            {' | '}
            <Link
                prefetch='intent'
                to='/impressum'
                title='Impressum'
            >
                Impressum & Datenschutz
            </Link>
        </span>
    )
}