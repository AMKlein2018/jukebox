// Your JavaScript Jukebox should:

// Display at least one song on the page when the page loads
// Give the user the ability to play that song, without using 
// the "built-in" play button. 

// This could be through a different button, 
// through clicking or mousing over an image on the page, 
// or any other device of your choosing.

// Give the user the ability to stop that song 
// without using the "built-in" stop button. 

// Once again, this could be through a different button, 
// through clicking or mousing over an image on the page, 
// or any other device of your choosing.

// Give the user the ability to load at least one different song 
// into the Jukebox besides the one that is loaded when the page 
// initially renders.


// Give the user the ability to go to the next song
// The whole Jukebox should be backed by an object called 
// Jukebox with methods to play, stop, and load songs.

// Extra Challenge:

// Playlist of songs, allows the user to queue up the next song
// Feature to request a random song

var play = document.getElementById('play')
var stop = document.getElementById('stop')
var pause = document.getElementById('pause')
var next = document.getElementById('next')
var previous = document.getElementById('previous')
var random = document.getElementById('random')

// var aud = document.getElementById("myAudio")

// var songs = new Audio(["YellowLedbetter.mp3", "EvenFlow.mp3", "Black.mp3", "BetterMan.mp3", "Alive.mp3"]) 

var song1 = new Audio("YellowLedbetter.mp3")
var song2 = new Audio("EvenFlow.mp3")
var song3 = new Audio("Black.mp3")
var song4 = new Audio("BetterMan.mp3")
var song5 = new Audio("Alive.mp3")
var currentSong = 0



class JukeBox {
		constructor() {
			this.songs = [song1, song2, song3, song4, song5]
			
		
			}
			playMusic() {
			
				this.songs[currentSong].play()
			}

			pauseMusic () {
				this.songs[currentSong].pause()

			}

			nextSong () {
				this.songs[currentSong].pause()
				this.songs[currentSong].currentTime = 0
			

				if (currentSong === this.songs.length-1) {
					currentSong = 0;
					this.songs[currentSong].play()
					}
					else {
						currentSong = currentSong+1
						this.songs[currentSong].play()
					}
			}
			stopMusic() {
				this.songs[currentSong].pause()
				this.songs[currentSong].currentTime = 0
			}

			previousSong() {
				this.songs[currentSong].pause()
				this.songs[currentSong].currentTime = 0

				if (currentSong === 0) {
					currentSong = this.songs.length-1;
					this.songs[currentSong].play()
					}
					else {
						currentSong = currentSong-1
						this.songs[currentSong].play()
					}
			}

			randomSong() {

			}

	}		

var j = new JukeBox()
	
	Play.addEventListener("click", function(){
		j.playMusic()
	})


	Stop.addEventListener("click", function(){
		j.stopMusic()
	})

	Pause.addEventListener("click", function(){
		j.pauseMusic ()
	})

	Next.addEventListener("click", function(){
		j.nextSong ()
	})

	Previous.addEventListener("click", function(){
		j.previousSong ()
	})

	Random.addEventListener("click", function(){
		j.randomSong ()
	})





// Jukebox.play()