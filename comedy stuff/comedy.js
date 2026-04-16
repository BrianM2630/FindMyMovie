(() => {
    const catalog = document.getElementById('catalogGrid');
    if (!catalog) return;


      const initialMovies = [
       {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SW_X_5e8-JS4w7ld_hWarODeyP_zJaGepA&s', title: 'Superbad (2007)'},

        
                    { src: 'https://m.media-amazon.com/images/M/MV5BY2E3OWQ5OWYtYTRkMC00NjVjLWIzZDQtNmRmM2ZiYTIyYmYxXkEyXkFqcGc@._V1_.jpg', title: 'The Big Lebowski (1998)' },
        { src: 'https://m.media-amazon.com/images/I/91hw9QJrVkL._AC_UF894,1000_QL80_.jpg', title: 'Anchorman: The Legend of Ron Burgundy (2004)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_FMjpg_UX1000_.jpg', title: 'Bridesmaids (2011)' },
        { src: 'https://m.media-amazon.com/images/I/717oJKn8mzL._AC_UF894,1000_QL80_.jpg', title: 'Step Brothers (2008)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@._V1_.jpg', title: 'Groundhog Day (1993)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BZWYwMjUxNjMtMzE0MC00NDM3LWIxMmQtYmEyNWVjNjdlZGZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: "Ferris Bueller's Day Off (1986)" },
        { src: 'https://m.media-amazon.com/images/I/51++3Ci7VKL._AC_UF894,1000_QL80_.jpg', title: 'Airplane! (1980)' },
        { src: 'https://m.media-amazon.com/images/I/91i+dHUDVYL.jpg', title: 'The Hangover (2009)' },

           { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKSrhomI6JDGwIzih5vFfy81xXeVPYxXLtA&s', title: 'Shaun of the Dead (2004)' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxqf0z0CjAvRfoUWOpVgf5GW_EbZNKIwIgg&s', title: 'Some Like It Hot (1959)' },
        { src: 'https://m.media-amazon.com/images/I/91mjR0cmayL.jpg', title: 'Ghostbusters (1984)' },
        { src: 'https://m.media-amazon.com/images/I/51MdS4WgujL._AC_UF894,1000_QL80_.jpg', title: 'School of Rock (2003)' },
                { src: 'https://m.media-amazon.com/images/M/MV5BMTg2NjJiODctM2IyMS00MmQ5LWI1YmQtNTBjMTI4M2U2YzA5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: '21 Jump Street (2012)' },


            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1pPDvBBIDWLP67XnE5lvNVZQTIBUhIIQ-w&s', title: 'Booksmart (2019)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BMTk0MTQ3NDQ4Ml5BMl5BanBnXkFtZTcwOTQ3OTQzMw@@._V1_.jpg', title: 'Borat (2006)' },
       
        { src: 'https://m.media-amazon.com/images/M/MV5BOTU1MTM1ZTUtMzcxNy00OTRiLTllNzItN2U3MGQ4YTQzYWE4XkEyXkFqcGc@._V1_.jpg', title: 'Bridget Jones’s Diary (2001)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BOWJjNmY1N2YtMjkwMy00Nzk1LWI5YzAtNTgzOTZjOWVhZmEyXkEyXkFqcGc@._V1_.jpg', title: 'The Devil Wears Prada (2006)' },
                { src: 'https://m.media-amazon.com/images/I/51J044NSCML._AC_UF894,1000_QL80_.jpg', title: 'Bamboozled (2000)' },


               { src: 'https://m.media-amazon.com/images/I/51YbKG456qL._AC_UF894,1000_QL80_.jpg', title: 'Me and You and Everyone We Know (2005)' },
        { src: 'https://m.media-amazon.com/images/M/MV5BNzNjZGE4YTUtOWU3OC00Mzg2LThjNWItMzUwYzEwMDgxYmVjXkEyXkFqcGc@._V1_.jpg', title: 'Shaun of the Dead (2004)' },
                { src: 'https://m.media-amazon.com/images/M/MV5BNjYwNTA3MDIyMl5BMl5BanBnXkFtZTYwMjIxNjA3._V1_FMjpg_UX1000_.jpg', title: 'Napoleon Dynamite (2004)' },
        { src: 'https://m.media-amazon.com/images/I/61kp8oY-TgL._AC_UF1000,1000_QL80_.jpg', title: 'Legally Blonde (2001)' },
                { src: 'https://www.originalfilmart.com/cdn/shop/products/AceVentura-PetDetective_1994_fr_original_film_art_5000x.webp?v=1676508149', title: 'Ace Ventura: Pet Detective (1994)' },


                { src: 'https://m.media-amazon.com/images/M/MV5BMmRjZWZjYTQtOWI0MC00OGUxLTgzZmItYzkwYzdjNjA0OTczXkEyXkFqcGc@._V1_.jpg', title: 'Hellzapoppin’ (1941)' }
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
