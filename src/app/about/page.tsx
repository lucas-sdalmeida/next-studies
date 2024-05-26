import Link from "next/link"

import styles from './style.module.css'
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About page'
}

export default function AboutPage() {
    return (
        <main className={ styles.main }>
            <h1>About page</h1>
            <p>Pages in next should be placed in a page.tsx file.</p>
            <p>Routing works automatically by creating sub-folders in the app folder.</p>
            <br />
            <Link href="/">THIS IS A LINK FOR HOME</Link>
        </main>
    )
}
