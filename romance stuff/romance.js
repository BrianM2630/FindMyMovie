(() => {
    const catalog = document.getElementById('catalogGrid');
    if (!catalog) return;

    const initialMovies = [
        { src: 'https://m.media-amazon.com/images/M/MV5BOTQwYmRhNGQtODI2Mi00ZTRlLTk0Y2QtY2NkNjE1MGNhNTgwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: '10 Things I Hate About You (1999)' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4u6kQMv2zMyGQQirlDfbPzq2n14De4Fv4Q&s', title: '500 Days of Summer (2009)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMTAzMTQzMTA2MjheQTJeQWpwZ15BbWU4MDk2MTg2MzUx._V1_.jpg', title: 'The Age of Adaline (2015)' },
        { src: 'https://m.media-amazon.com/images/I/A1IN4VsOOmL._AC_UF350,350_QL80_.jpg', title: 'The Age of Innocence (1993)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMTY0Mjg4NDgxOV5BMl5BanBnXkFtZTgwMDAyMzE0NzE@._V1_.jpg', title: 'Beauty and the Beast (2005)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BYzI1ZmU0NDAtYWE4OS00Njc2LWIyZWYtZmQ5YTFhYTM4YzRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Blue Valentine (2010)' },
        { src: 'https://m.media-amazon.com/images/I/91UBCtiroTL._AC_UF894,1000_QL80_.jpg', title: "Casablanca (1942)" },
        { src: 'https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_.jpg', title: 'Call Me by Your Name (2017)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMzM4OWFjMTMtZjNjOS00YmU3LTlhY2MtNjFiMTVkN2Y1OTZlXkEyXkFqcGc@._V1_.jpg', title: 'Brokeback Mountain (2005)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMTQ5NTg5ODk4OV5BMl5BanBnXkFtZTgwODc4MTMzMDE@._V1_.jpg', title: 'Blue is the Warmest Colour (2013)' },
        { src: 'https://upload.wikimedia.org/wikipedia/en/7/7c/About_Time_%282013_film%29_Poster.jpg', title: 'About Time (2013)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BZjkwMGE3YmMtNmEzNC00NzMxLThjYTgtNWNiODA4YmMxYmY3XkEyXkFqcGc@._V1_.jpg', title: 'Big Red Envelope (2021)' },
                { src: 'https://m.media-amazon.com/images/I/91HDfaR0EPL._AC_UF894,1000_QL80_.jpg', title: 'The Best of Me (2014)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMzRmYmY4MDItNWEyZi00MGI3LTgwMDgtYjBiZDcxNjk3NTFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Band Baaja Baaraat (2010)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BODIzZmQzMTItZGY1YS00MmU4LWE5ZjgtNmFlMjQyMGZiY2FhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Autumn in New York (2000)' },
        
        { src: 'https://m.media-amazon.com/images/M/MV5BOWRiMTQyZjQtYWRiZS00MDdlLWE1NjEtNjk1MTcyMmNkZTc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'The Anonymous Venetian (1970)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNjZlOWE5N2UtMTdhZC00NjU5LTg2MjYtOGU4NDhhNWNlMmRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Annie Hall (1977)' },
                { src: 'https://upload.wikimedia.org/wikipedia/en/a/a4/The_Artist_Poster.jpg', title: 'The Artist (2011)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'The Notebook (2004)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BYTEyZTAyMjAtYjAwMi00YTkzLWE0MTAtYzZiNjY5YTcyMzlhXkEyXkFqcGc@._V1_.jpg', title: 'Across the Universe (2007)' },
                { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/La_La_Land_%28film%29.png/250px-La_La_Land_%28film%29.png', title: 'La La Land (2016)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNDQwNzI2OTY2Ml5BMl5BanBnXkFtZTYwOTI3ODc5._V1_FMjpg_UX1000_.jpg', title: 'Angel Eyes (2001)' },
                { src: 'https://m.media-amazon.com/images/M/MV5BZjM4MTI3OWYtNjg0ZS00NmE0LTliNjAtOTRjMjE5N2Q3YjJiXkEyXkFqcGc@._V1_.jpg', title: 'Fitoor (2016)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNTdjYmNmMWMtOWViOC00YjgzLWI2YWUtZWJmNjU1MmNkMzRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'In Your Eyes (2014)' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdC73Rz9xssBmdwIqwKOYs7nf9MbjigZtuQ&s', title: 'Love on the Cloud (2014)' }
    ];
    

    function createTile(movie){
        const tile = document.createElement('div');
        tile.className = 'movie-tile';

        const img = document.createElement('img');
        img.src = movie.src;
        img.alt = movie.title || 'Movie poster';

        const header = document.createElement('div');
        header.className = 'tile-header';
        header.textContent = movie.title || '';

        const buttons = document.createElement('div');
        buttons.className = 'tile-buttons';

        const left = document.createElement('div'); left.className = 'left';
        const right = document.createElement('div'); right.className = 'right';

        const play = document.createElement('button'); play.textContent = 'Play';
        play.addEventListener('click', (e)=>{ e.stopPropagation(); console.log('Play:', movie.title); });

        const trailer = document.createElement('button'); trailer.textContent = 'Trailer';
        trailer.addEventListener('click', (e)=>{ e.stopPropagation(); console.log('Trailer:', movie.title); });

        const info = document.createElement('button'); info.textContent = 'Info';
        info.addEventListener('click', (e)=>{ e.stopPropagation(); alert(movie.title || 'No title'); });

        const fav = document.createElement('button'); fav.textContent = '♥';
        fav.addEventListener('click', (e)=>{ e.stopPropagation(); fav.classList.toggle('fav'); });

        left.appendChild(play); left.appendChild(trailer);
        right.appendChild(info); right.appendChild(fav);
        buttons.appendChild(left); buttons.appendChild(right);

        tile.appendChild(img);
        tile.appendChild(header);
        tile.appendChild(buttons);

        tile.addEventListener('click', ()=>{ console.log('Open:', movie.title); });

        return tile;
    }

    function addMovie(src, title){
        const movie = {src, title};
        const tile = createTile(movie);
        catalog.appendChild(tile);
    }

    window.addMovie = addMovie;

    initialMovies.forEach(m => catalog.appendChild(createTile(m)));
})();
