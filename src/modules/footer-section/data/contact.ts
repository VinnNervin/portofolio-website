
interface ContactUrl {
   url: string;
   icon: string;
   color: string
}

export const contactUrls = [{
   url: "https://github.com/VinnNervin",
   icon: "bi bi-github",
   color: "text-gray-950"
},
{
   url: "https://instagram.com/charles.lin12",
   icon: "bi bi-instagram",
   color: "text-red-600"
},
{
   url: "https://wa.me/+6282275370177",
   icon: "bi bi-whatsapp",
   color: "text-green-600"
},
{
   url: "mailto:charleslin437@gmail.com",
   icon: "bi bi-envelope-at",
   color: "text-blue-800"
},
] as const satisfies ContactUrl[];