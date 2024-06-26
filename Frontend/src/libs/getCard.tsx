export default async function getCard(id:string){

    const response = await fetch(`http://localhost:5000/api/rooms/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch CoworkingSpace")
    }

    return await response.json()
}