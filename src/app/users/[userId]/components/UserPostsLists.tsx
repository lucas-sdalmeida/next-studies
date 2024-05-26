type UserPostsListProps = { postsPromise: Promise<Post[]> }

export default async function UserPostsList({ postsPromise }: UserPostsListProps) {
    const posts = await postsPromise

    return posts.map(post => {
        return (
            <article key={ post.id }>
                <header>
                    <h3>{ post.title }</h3>
                </header>
                <br />
                <p>{post.body}</p>
                <br />
            </article>
        )
    })
}
