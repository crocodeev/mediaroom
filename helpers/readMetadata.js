const mm = require('music-metadata')
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]

async function getMetaData(){

    const files = fs.readdirSync(folder)

        for( file of files){
            const filePath = path.join(folder, file)
            const allMeta = await mm.parseFile(filePath)
            const meta = await allMeta.common


            const obj = {
                title: meta.title,
                artist: meta.artist,
            }

            
            console.log(obj)
        }

}

getMetaData()