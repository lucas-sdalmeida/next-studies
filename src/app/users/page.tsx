import type { Metadata } from "next"
import Link from "next/link"

import getAllUsers from "@/lib/get-all-users"

export const metadata: Metadata = {
    title: 'Users'
}

export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData

    console.log('Hello world')

    return (
        <section>
            <header>
                <h2>Users</h2>
            </header>
            <br />
            {
                users.map(({ id, name }) => {
                    return (<><p key={ id }><Link href={ `/users/${id}` }>Name: { name }</Link></p><br /></>)
                })
            }
            <br />
            <Link href='/'>GO TO HOME</Link>
        </section>
    )
}
