export default async function getUser(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return response.ok ? response.json() : undefined
}
