export default async function getUser(id: string) {
    const respose = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!respose.ok) throw new Error(`Unable to find the user of id ${id}`)
    return respose.json()
}
