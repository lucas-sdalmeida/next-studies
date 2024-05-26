import type { Metadata } from "next"

import getUser from "@/lib/get-one-user"
import getPostsByUser from "@/lib/get-posts-by-user"

import { Suspense } from "react"
import { notFound } from "next/navigation"

import UserPostsList from "./components/UserPostsLists"
import getAllUsers from "@/lib/get-all-users"

type UserParams = { 
    params: { userId: string },
}

export async function generateMetadata({ params }: UserParams): Promise<Metadata> {
    const userData: Promise<User> = getUser(params.userId)
    const user = await userData

    return {
        title:  user ? `User: ${user.name}` : 'User not found'
    }
}

export default async function UserPage({ params }: UserParams) {
    const userRequest: Promise<User> = getUser(params.userId)
    const postsRequest: Promise<Post[]> = getPostsByUser(params.userId)

    // const [ user, posts ] = await Promise.all([ userRequest, postsRequest ])

    const user = await userRequest

    if (!user) notFound()

    return (
        <section>
            <header>
                <h2>User: { user.name }</h2>
            </header>
            <br/>
            <Suspense fallback={ <h2>Loading ... </h2> }>
                <UserPostsList postsPromise={ postsRequest } />
            </Suspense>
            <br />
        </section>
    )
}

export async function generateStaticParams() {
    const users: User[] = await getAllUsers()
    return users.map(({ id }) => id.toString())
}
 