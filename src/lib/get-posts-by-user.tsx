export default async function getPostsByUser(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    if (!response.ok) throw new Error('Unable to find this user posts!')
    return response.json()
}
