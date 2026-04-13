(() => {
    const catalog = document.getElementById('catalogGrid');
    if (!catalog) return;

    const initialMovies = [
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZ35ZtMalXPpw-jD69t4BHLI3YEIFZglkyw&s', title: 'Sinners (2025)' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhz3gp8evf2jIjkIT7QL6NwBCQsyODT4RMw&s', title: 'The Ugly Stepsister (2025)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BZDZkYzk3YTEtYTQ5MS00MzQ5LTg0NjUtOTgzODA5N2EyYTQ1XkEyXkFqcGc@._V1_.jpg', title: 'Scream VI (2023)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNTBhNWJjZWItYzY3NS00M2NkLThmOWYtYTlmNzBmN2UxZWFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Weapons (2025)' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCAYZop54p74APaGYZKgobZ9jFuysO3YZLw&s', title: 'Talk to Me (2023)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BM2E0MTc5NzgtNzQ3Ni00MGQ1LThmOTItY2U4M2Y3NDVlYzliXkEyXkFqcGc@._V1_.jpg', title: 'Evil Dead Rise (2023)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BYjU1ZWMxYTUtNzQ1ZC00ZTcxLTg0NTMtMzY1ZmQyZjhmYjMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: "M3GAN (2023)" },
        { src: 'https://upload.wikimedia.org/wikipedia/en/3/34/X_%282022_film%29.jpeg', title: 'X (2022)' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1V1GmLjAmuB3ZGpPsZx_YrrA4jlCEB2osA&s', title: 'The Exorcist (1973)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMzZiNTdiYTgtYjNkMS00MmJmLWEwZGQtNmY0NGJkMGE0YmYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Halloween (1978)' },
        { src: 'https://m.media-amazon.com/images/I/81f0R7uwewL._AC_UF894,1000_QL80_.jpg', title: 'The Shining (1980)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BOTMyMjFjNzAtMzdiYS00YTliLTllYTgtY2I3YzFlMjA3YWRkXkEyXkFqcGc@._V1_.jpg', title: 'Hereditary (2018)' },
                { src: 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg', title: 'Get Out (2017)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Alien (1979)' },
        { src: 'https://m.media-amazon.com/images/S/pv-target-images/07bf3eab61b81fe271992aeaa9c31dfe46a491af55b12dae348f779f26a64940.jpg', title: 'A Nightmare on Elm Street (1984)' },
        
        { src: 'https://m.media-amazon.com/images/M/MV5BYTA3NDU5MWEtNTk4Yy00ZDNkLThmZTQtMjU3ZGVhYzAyMzU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'The Thing (1982)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_.jpg', title: 'The Witch (2015)' },
                { src: 'https://m.media-amazon.com/images/M/MV5BYTU3MDQxN2EtNjI5ZC00NDAyLTgwMTctODgxYjRlNWFmOGQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: '28 Days Later (2002)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNzFkMDE2ZmEtOWMwNy00MWM2LThlNjMtZWQzNWY5MTJjZjcxXkEyXkFqcGc@._V1_.jpg', title: 'Five Nights at Freddy\'s (2023)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BZmQ3NmIxNTgtYjFiNS00NzliLWI0YzAtZDkxY2E0YWIxZDEwXkEyXkFqcGc@._V1_.jpg', title: 'Five Nights at Freddys 2 (2025)' },
                { src: 'https://m.media-amazon.com/images/I/81F2bnsjm+L._AC_UF1000,1000_QL80_.jpg', title: 'Saw (2004)' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqo6v19mMh38Oan7Qzu8cmf6LZvHrgASLZg&s', title: 'Backrooms (2026)' },
                { src: 'https://m.media-amazon.com/images/I/81AZKLUwtaL._AC_UF1000,1000_QL80_.jpg', title: 'It (2017) ' },
        { src: 'https://m.media-amazon.com/images/M/MV5BZWQ2OTY0M2UtMTQxNC00MmIzLTllNDQtNDQ0MTQyYzI2M2ZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'The Sixth Sense (1999)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BODg3ZTM2YWQtZDE5Ny00NGNiLTkzYjgtYWVlYjNkOTg5NDI1XkEyXkFqcGc@._V1_.jpg', title: 'World War Z (2013)' }
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
