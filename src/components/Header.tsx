import React from 'react'

export default function Header() {
    return (
        <header className=''>
            <div className="netflixLogo">
                <a id="logo" href="#home">
                    <img
                        src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
                        alt="Logo Image"
                    />
                </a>
            </div>
            <nav className="main-nav text-lg">
                <a href="/#">Home</a>
                <a href="tvShows">TV Shows</a>
                <a href="movies">Movies</a>
                <a href="originals">Originals</a>
                <a href="">Recently Added</a>
            </nav>
        </header>

    )
}
