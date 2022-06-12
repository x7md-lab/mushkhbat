export async function onRequestPost(request){
    const { headers } = request;
    const contentType = headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
        let bodyData = await request.json();
        let req =  await fetch("https://script.google.com/macros/s/AKfycbwwaTAV5kq8KAcwljglw7H8ZE5NfuuiH965vdKECOgaIkDpxxZ0bEIk1LoyJJgzAWMypA/exec",
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
        })
        let data = await req.json();
        const info = JSON.stringify(data, null, 2);
        return new Response(info);
    } 
          return new Response(JSON.stringify({done: false, error: "Not JSON"}));
      
}