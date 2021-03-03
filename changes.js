let favoriteMovie = {
    runTime: 2,
    name: 'Wizard of Oz',
    genre: {
        movieInfo: {
            Characters: [
                {Musical: 18, characterName: 'Dorothy'},
                {Musical: 25, characterName:'Scare Crow'},
                {Musical: 30, characterName: 'Tin Man'},
                {Musical: 40, characterName: 'Cowardly Lion'},



            ]
        }
    },
   
    
}


console.log(favoriteMovie.genre.movieInfo.Characters[0,1,2,3]);