export default async function getPostsByUser(userId: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`,
        { next: { revalidate: 60 } },
    )
    return response.ok ? response.json() : undefined
}
