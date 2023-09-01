import Header1 from '../component/Header1'
import { renderToString } from 'react-dom/server';

// export default async function handler(req, res) {
//   const response = await fetch('http://localhost:3000'); // Faz a requisição à URL desejada
//   const data = await response.text(); // Obtém o conteúdo HTML da resposta

//   // Substitui os URLs relativos por URLs absolutos usando o domínio correto
//   let html = data.replace(/src="\//g, 'src="http://localhost:3000/');
//   html = html.replace(/(src|href)="\/([^"]+)"/g, '$1="http://localhost:3000/$2"')
   
//   res.status(200).send(html); 
// }

export default async function handler(req, res) {
  let html = renderToString(<Header1 />)
  html = html.replace(/src="\//g, 'src="http://localhost:3000/')
html = html.replace(/(src|href)="\/([^"]+)"/g, '$1="http://localhost:3000/$2"')
  res.status(200).send(html)
}