export async function getItems() {
    const response = await fetch('https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=recent')
    
    if (!response.ok) {
        throw new Error(`error 상태 ${response.status}`)
    }
    const body = await response.json();
    console.log(body);
    return body;
}