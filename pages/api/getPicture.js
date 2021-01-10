import fs from 'fs'

export default function getPicture(req,res){
  
    if(req.method === "POST"){

        const params =  req.body
    
        const trackPath = '.\\public\\images\\' + params.channel + '.jpg'

        const file = fs.createReadStream(trackPath)

        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
        })

        file.pipe(res)


      
    }else{
        res.statusCode = 404
        res.send("endpoint didn't exist")
    }
}