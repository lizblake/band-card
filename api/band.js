
export default async function handler(request, res) {

    const band = [
        {
            "title" : "Scotia",
            "image" : "https://thesquonkisrealandthirstsforyourtears.com/IMG_3167.JPG",
            "information" : "Info",
            "topText" : "random",
            "bottomText" : "stuff"
            
         },
         {
            "title" : "Mellow Honey",
            "image" : "https://thesquonkisrealandthirstsforyourtears.com/IMG_3167.JPG",
            "information" : "Info",
            "topText" : "best band",
            "bottomText" : "EVER"
            
         },
         {
            "title" : "The Willard Building",
            "image" : "https://thesquonkisrealandthirstsforyourtears.com/IMG_3167.JPG",
            "information" : "Info",
            "topText" : "best band",
            "bottomText" : "EVER"
            
         },
         {
            "title" : "Bezos BBQ",
            "image" : "https://thesquonkisrealandthirstsforyourtears.com/IMG_3167.JPG",
            "information" : "Info",
            "topText" : "best band",
            "bottomText" : "EVER"
            
         },
         {
            "title" : "Scarlet Moon",
            "image" : "https://thesquonkisrealandthirstsforyourtears.com/IMG_3167.JPG",
            "information" : "Info",
            "topText" : "best band",
            "bottomText" : "EVER"
            
         }
    
    ]
    
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(band);
  }