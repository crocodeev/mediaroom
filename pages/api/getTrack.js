import playlist from '../../dbEmulation/playlist'
import fs from 'fs'

export default function getTrack(req,res){
  
    if(req.method === "POST"){

        console.log(req.body);

        const params =  req.body
        console.log(playlist[params.channel][params.time][params.number])
        const trackPath = playlist[params.channel][params.time][params.number]

        const file = fs.createReadStream(trackPath)

        res.writeHead(200, {
            'Content-Type': 'audio/mpeg',
        })

        file.pipe(res)


      
    }else{
        res.statusCode = 404
        res.send("endpoint didn't exist")
    }
}