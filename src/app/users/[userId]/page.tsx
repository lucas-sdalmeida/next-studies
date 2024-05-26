import type { Metadata } from "next"

import getUser from "@/lib/get-one-user"
import getPostsByUser from "@/lib/get-posts-by-user"

import { Suspense } from "react"

import UserPostsList from "./components/UserPostsLists"

type UserParams = { 
    params: { userId: string },
}

export async function generateMetadata({ params }: UserParams): Promise<Metadata> {
    const userData: Promise<User> = getUser(params.userId)
    const { name } = await userData
    return {
        title: `User: ${name}`
    }
}

export default async function UserPage({ params }: UserParams) {
    const userRequest: Promise<User> = getUser(params.userId)
    const postsRequest: Promise<Post[]> = getPostsByUser(params.userId)

    // const [ user, posts ] = await Promise.all([ userRequest, postsRequest ])

    const user = await userRequest


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
