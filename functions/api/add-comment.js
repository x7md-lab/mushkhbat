export async function onRequestPost(){
        let req =  await fetch("https://script.google.com/macros/s/AKfycbwwaTAV5kq8KAcwljglw7H8ZE5NfuuiH965vdKECOgaIkDpxxZ0bEIk1LoyJJgzAWMypA/exec",
          {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            post: "post", uid: 'F0CiaFfqnJV3mBLeEFZsjJM4vR43',
            name: 'حمد بنقالي',
            pic: 'https://lh3.googleusercontent.com/a-/AOh14GjMfljIeb62Ln_siBrslVORq4waawMh94Aaxsmp-A=s96-c',
             commentText: 'Hello'}
            )
          })
          let data = await req.json();
          const info = JSON.stringify(data, null, 2);
          return new Response(info);
      
}