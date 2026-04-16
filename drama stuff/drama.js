(() => {
    const catalog = document.getElementById('catalogGrid');
    if (!catalog) return;

    const initialMovies = [
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKj2V8wy0wJPNEn8shBugnVcJrsrmi6onZSA&s', title: 'Maria (2024)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BYjJjZDc5YTUtYTc4My00Yzc2LTkwMGUtOTg3ODIwYzJkYTJiXkEyXkFqcGc@._V1_.jpg', title: 'The Iron Claw (2023)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_FMjpg_UX1000_.jpg', title: 'Life of Pi (2012)' },
        { src: 'https://m.media-amazon.com/images/I/71lqDylcvGL._AC_UF894,1000_QL80_.jpg', title: 'Oppenheimer (2023)' },
        { src: 'https://m.media-amazon.com/images/I/914RwXQPraL._AC_UF894,1000_QL80_.jpg', title: 'Spencer (2021)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BM2Q0MDg3NTMtZWNhMy00OTFlLWI0OTgtZTBkMzZmYjYyOWU3XkEyXkFqcGc@._V1_.jpg', title: '12 Years a Slave (2013)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNGUxZTc0NTAtNzQwMy00MmM2LTgzMGYtZWIyY2E1MGFjYmM5XkEyXkFqcGc@._V1_.jpg', title: "A Star Is Born (2018)" },
        { src: 'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg', title: 'Gone Girl (2014)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNDdjZGQ5YzEtNTc2My00Mjc0LWFlMTctYzkwMzZlNzdiZWYzXkEyXkFqcGc@._V1_.jpg', title: 'Good Will Hunting (1997)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_FMjpg_UX1000_.jpg', title: 'Her (2013)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BY2RhNDRhNzctZTllMy00NTc2LWJjZmUtMzg3MTNiNjhhODMxXkEyXkFqcGc@._V1_.jpg', title: 'Hidden Figures (2016)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BYjViNDQzNmUtYzkxZi00NTk5LTljMmItYjJlZmZkODIxNjU1XkEyXkFqcGc@._V1_.jpg', title: 'Jaws (1975)' },
                { src: 'https://m.media-amazon.com/images/M/MV5BOWJkZWY5YTAtMTQwMS00MGUyLWJjM2UtMGM5ZmRkMTc4MjRiXkEyXkFqcGc@._V1_.jpg', title: 'Judas and the Black Messiah (2021)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMTUxMzk0NDg1MV5BMl5BanBnXkFtZTgwNDg0NjkxMDI@._V1_.jpg', title: 'Lost in Translation (2003)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BZWY0NzgxMWQtMjM4NC00MjRiLWE0YjctYTFiNjA2NTNkZGY1XkEyXkFqcGc@._V1_.jpg', title: 'Remember the Titans (2000)' },
        
        { src: 'https://m.media-amazon.com/images/M/MV5BODkxNTM3MzYtZDBmNi00NDQwLWI0NjQtNzAwNzMyMDUyMmQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Selma (2014)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMWE5ZmYwNDEtYTYwMS00MTc0LTk2ZWItZTM1MjQ1ZDYzZGUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Sound of Metal (2019)' },
                { src: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg', title: 'The Dark Knight (2008)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg', title: 'The Godfather (1972)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNzgyMGM2YTItYzY2Yi00NDQ0LWE0M2EtMGUzYjFlMDgyY2M3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'The Hurt Locker (2008)' },
                { src: 'https://m.media-amazon.com/images/M/MV5BMTQ3NTMxODg1Ml5BMl5BanBnXkFtZTcwMjEyMjczMQ@@._V1_FMjpg_UX1000_.jpgs', title: 'The Queen (2006)' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAoH_WdYG7Sdz11IjqFvOM3UpSNtXqlccSeA&s', title: 'Titanic (1997)' },
                { src: 'https://m.media-amazon.com/images/I/71AsyQARb+L._AC_UF1000,1000_QL80_.jpg', title: 'Uncut Gems (2019)' },
        { src: 'https://m.media-amazon.com/images/I/91EkEcJKpOL._AC_UF894,1000_QL80_.jpg', title: 'Fences (2016)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg', title: 'Eternal Sunshine of the Spotless Mind (2004)' }
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
