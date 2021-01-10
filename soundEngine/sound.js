import {Howl, Howler} from 'howler'
import * as musicMetadata from 'music-metadata-browser'
import * as EventEmmiter from 'events'
import next from 'next'

class Sound extends EventEmmiter {

    constructor() {
        super()

        let firstSlot = null
        let secondSlot = null
        
        this.currentSlot = null
        this.channel = ''
        this.index = 0
        this.slots = [
            firstSlot,
            secondSlot
        ]
      

    }

   async play() {

    //choose slot to play, start slot is first
        let currentSlot = this.currentSlot = this.slots[(this.index%2)]
        console.log("---current slot---")
        console.log(currentSlot);

        //check is slot empty?
        if(currentSlot){
                    console.log("slot is full");
            currentSlot.on('play', async () => {
                  
                    this.emit('play', [currentSlot.title, 
                                       currentSlot.artist])
                    console.log("start playing...")
                    console.log(this);
                    console.log("increase index")
                    this.index++
                    console.log("load next slot")
                    this.slots[(this.index%2)] = await this.loadSlot({
                        time: "evening",
                        channel: this.channel,
                        number: this.index
                    })
            })

            currentSlot.on('end',() => {
              
                    console.log("stop")
                    console.log("clear this slot")
                    this.slots[!(this.index%2)] = null
                    console.log("play next");
                    this.play()
            })

            currentSlot.play()

        }else{
            console.log("current slot is empty");
            const options = {
                time: "evening",
                channel: this.channel,
                number: this.index
            }
            console.log("load slot");
            //??
            currentSlot = this.currentSlot = this.slots[(this.index%2)] = await this.loadSlot(options)

            currentSlot.on('play', async () => {
                
                console.log("start playing...")
                this.emit('play', [currentSlot.title, 
                                    currentSlot.artist])
                console.log(this)
                console.log("increase index")
                this.index++
                console.log("load next slot")
                this.slots[(this.index%2)] = await this.loadSlot({
                    time: "evening",
                    channel: this.channel,
                    number: this.index
                })

            })

            currentSlot.on('end',() => {
                    
                    this.slots[!(this.index%2)] = null
                    this.play()

            })
    

            currentSlot.play()


        }


    }

 


    async loadSlot(options){


        const header = new Headers()
        header.append("Content-Type", "application/json")

        const raw = JSON.stringify(options)

        const requestOptions = {
            method: 'POST',
            headers: header,
            body: raw,
            redirect: 'follow'
          }

        let response = await fetch("http://localhost:3000/api/getTrack", requestOptions)
        let result = await response.blob()
        let meta = await musicMetadata.parseBlob(result)

        
        const url = URL.createObjectURL(result)

        const track = new Howl({
            src: url,
            preload: true,
            format:["mp3"]
        })

        track.artist = meta.common.artist
        track.title = meta.common.title

        URL.revokeObjectURL(url)
        
        return track
    }

    async setChannel(channel){

        this.channel = channel
       
        console.log(+this.index%2)
        console.log(this.slots)
        console.log(this.slots[+this.index%2])
        this.slots[+this.index%2] = null
        this.slots[+this.index%2] = await this.loadSlot({
                time: "evening",
                channel: this.channel,
                number: this.index
            })
        
        console.log(this)
    }

    togglePausePlay(){
        console.log("toggle")
        console.log(this.currentSlot)
        console.log(this.currentSlot.playing())
        if(this.currentSlot.playing()){
            this.currentSlot.pause() 
        }else{
            this.currentSlot.play() 
        }
    }


}




export default Sound