(() => {
    const catalog = document.getElementById('catalogGrid');
    if (!catalog) return;

    const initialMovies = [
        { src: 'https://m.media-amazon.com/images/I/91vIHsL-zjL._AC_UF894,1000_QL80_.jpg', title: 'Interstellar (2014)' },
        { src: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png', title: 'The Matrix (1999)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Dune: Part Two (2024)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg', title: 'Star Wars: The Force Awakens (2015)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_.jpg', title: 'The Martian (2015)' },
        { src: 'https://m.media-amazon.com/images/I/81poz6t+a2L._AC_UF894,1000_QL80_.jpg', title: 'Godzilla Minus One (2026)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_.jpg', title: "Terminator 2: Judgment Day (1991)" },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu57lqDfRd1UGrkAeZvo16K9w6qD-s3fXPTQ&s', title: 'Blade Runner (1982)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg', title: 'Blade Runner 2049 (2017)' },
        { src: 'https://m.media-amazon.com/images/I/911uAMIhbqL._AC_UF894,1000_QL80_.jpg', title: 'Star Wars: A New Hope (1977)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'The Empire Strikes Back (1980)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMjhjMGYyMjAtMzJkYy00NzhlLWIwY2MtMWQ2ODIxZDUyOGYyXkEyXkFqcGc@._V1_.jpg', title: 'Metropolis (1927)' },
                { src: 'https://m.media-amazon.com/images/M/MV5BNjU0NDFkMTQtZWY5OS00MmZhLTg3Y2QtZmJhMzMzMWYyYjc2XkEyXkFqcGc@._V1_.jpg', title: '2001: A Space Odyssey (1968)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Alien (1979)' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJqY-YTyzittrAg8irjo0iuYDoDZ2TH1o3Q&s', title: 'Avatar (2009)' },
        
        { src: 'https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Everything Everywhere All At Once (2022)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNzA3ZTc4YTQtZTNiMy00ZmFkLWFlZjYtMzYwZGQ1M2IzODI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Children of Men (2006)' },
                { src: 'https://m.media-amazon.com/images/M/MV5BNzBhNzlkM2UtZTQyOC00NjUyLTkzMmMtNDQ1YTM5N2NmMGE5XkEyXkFqcGc@._V1_.jpg', title: 'Jurassic World (2015)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg', title: 'Inception (2010)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMTM4OTI1OTM5NF5BMl5BanBnXkFtZTcwMzk5MTU1Mg@@._V1_.jpg', title: 'District 9 (2009)' },
                { src: 'https://m.media-amazon.com/images/M/MV5BMjI2NzRkNmQtNTIwZi00ZWMxLThlOGQtMjQ1NjI3MzI5YmIzXkEyXkFqcGc@._V1_.jpg', title: 'Planet of the Apes (1968)' },
        { src: 'https://m.media-amazon.com/images/I/51-2MJCIr8L._AC_UF894,1000_QL80_.jpg', title: 'Back to the Future (1985)' },
                { src: 'https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg', title: 'Frankenstein  (2025) ' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_FMjpg_UX1000_.jpg', title: 'Star Trek (2009)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BN2FhNDI1YTYtNWI0OC00ZjYxLWJlYWEtN2ZiZjRmZDY1MWJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Star Trek Beyond (2016)' }
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
