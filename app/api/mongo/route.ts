export async function GET() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    console.log('DATA ---> ', data)
    
    return Response.json({ data })
}