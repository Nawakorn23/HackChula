export default async function getCards(){
    // await new Promise( (resolve)=>setTimeout(resolve, 1000) )

    const response = await fetch("http://localhost:5000/api/rooms")
    if(!response.ok) {
        throw new Error("Failed to fetch CoworkingSpaces")
    }

    return await response.json()
}