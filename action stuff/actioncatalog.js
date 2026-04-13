(() => {
    const catalog = document.getElementById('catalogGrid');
    if (!catalog) return;

    const initialMovies = [
        {src: 'https://m.media-amazon.com/images/I/81NHzC3QEYL.jpg', title: 'Mad Max: Fury Road (2015)'},
        
                {src: 'https://m.media-amazon.com/images/S/pv-target-images/e7339c812127fb30f94943d1b8b774acec2549ec1364c24493c4ffed6de2b243.jpg', title: 'Top Gun: Maverick (2022)'},
        
                   {src: 'https://cdn.marvel.com/content/1x/logan_lob_crd_02.jpg', title: 'Logan (2017)'},
        
        {src: 'https://m.media-amazon.com/images/M/MV5BMTE0ODc2NjU5NjJeQTJeQWpwZ15BbWU4MDg4NjU3OTUz._V1_.jpg', title: 'Mission: Impossible — Fallout (2018)'},
        
        {src: 'https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_.jpg', title: 'Terminator 2: Judgment Day (1991) '},
        
        {src: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg', title: 'John Wick (2014)'},

        {src: 'https://myhotposters.com/cdn/shop/products/HP2501_47e377e2-953b-4da4-af28-45f8b2920570_1024x1024.jpg?v=1748537594', title: 'Raiders of the Lost Ark (1981)'},

        {src: 'https://m.media-amazon.com/images/I/71-WYpqSfEL._AC_UF894,1000_QL80_.jpg', title: 'Avengers: Age of Ultron (2015)'},

        {src: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg', title: 'The Dark Knight (2008)'},

        {src: 'https://www.rogerebert.com/wp-content/uploads/2024/08/Atomic-Blonde-scaled.webp', title: 'Atomic Blonde (2017)'},

        {src: 'https://m.media-amazon.com/images/I/613ypTLZHsL._AC_UF1000,1000_QL80_.jpg', title: 'The Matrix (1999)'},

        {src: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8338313_p_v10_bb.jpg', title: 'Fast Five (2011)'},


                {src: 'https://m.media-amazon.com/images/M/MV5BMjJlOTc2YzktNzBkNC00ZDlhLWE4NzYtZjU5MjUyNDIyMzg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Casino Royale (2006)'},

            {src: 'https://m.media-amazon.com/images/I/810SlMj1+eL.jpg', title: 'Black Panther (2018)'},

            {src: 'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg', title: 'Edge of Tomorrow (2014)'},

            {src: 'https://m.media-amazon.com/images/I/71RYyuL4W6L._AC_UF894,1000_QL80_.jpg', title: 'Predator (1987)'},
                        
            {src: 'https://m.media-amazon.com/images/M/MV5BMTQ3NzA1MTY3MV5BMl5BanBnXkFtZTgwNzE2Mzg5MTE@._V1_.jpg', title: 'Snowpiercer (2013) '},

            {src: 'https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Everything Everywhere All At Once (2022)'},

            {src: 'https://m.media-amazon.com/images/M/MV5BYTg3NDlhNGUtMDIwMS00ODI1LWE0ZDgtYzc4OThlYThhNDEwXkEyXkFqcGc@._V1_.jpg', title: 'The Villainess (2017)'},

            {src: 'https://m.media-amazon.com/images/M/MV5BMTYxMzc0NDk1NV5BMl5BanBnXkFtZTgwNTcyMDEyODE@._V1_.jpg', title: 'Highlander (1986)'},

            {src: 'https://m.media-amazon.com/images/M/MV5BM2JhMjVjZTktODVkYi00ZTM2LTlkMDAtMDBhMDVjYTQxZmYzXkEyXkFqcGc@._V1_.jpg', title: 'The Protector (2005)'},

            {src: 'https://m.media-amazon.com/images/M/MV5BNDNkNDJmMTctOTk0ZS00OTI1LTg4NzAtMjYxMmFlOTM3YjRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'The Expendables 2 (2012)'},

            {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVREZIcllalcEoSn-gqd7ILtiMLwZlJXrV-w&s', title: 'Rush Hour (1998)'},

            {src: 'https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_FMjpg_UX1000_.jpg', title: 'The Equalizer (2014)'},

            {src: 'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg', title: 'Captain America: Civil War (2016)'}



        
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
