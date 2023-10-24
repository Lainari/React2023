export default async function getTravelData(){
    const response = await fetch("http://localhost:3100/travels")
    const jsonData = await response.json();

    return jsonData;
}