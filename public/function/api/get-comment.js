export async function onRequestGet({ params }) {
    const res = await fetch(`https://script.google.com/macros/s/AKfycbwwaTAV5kq8KAcwljglw7H8ZE5NfuuiH965vdKECOgaIkDpxxZ0bEIk1LoyJJgzAWMypA/exec?type=get-comment&post=${params.url}`);
    const data = await res.json();
    const info = JSON.stringify(data, null, 2);
    return new Response(info);
  }