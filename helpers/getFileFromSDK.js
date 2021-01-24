require('dotenv').config()
const fs = require('fs')
const AWS = require('aws-sdk')

const s3Client = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region : process.env.REGION
})

s3Client.getObject({
    Bucket: process.env.BUCKET,
    Key: "01 Hitch Hiker.mp3"
}, (error, data) => {
    if(error) console.log(error)
    else console.log(data)
})


   