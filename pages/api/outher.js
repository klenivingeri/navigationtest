export default async function handler(req, res) {
  const response = await fetch('http://localhost:3000'); 
  const data = await response.text(); 


  let html = data.replace(/src="\//g, 'src="http://localhost:3000/');
  html = html.replace(/(src|href)="\/([^"]+)"/g, '$1="http://localhost:3000/$2"')

  res.status(200).send(html); 
}