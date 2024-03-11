import React from 'react'

export default function Card({ is18 }: CardType) {
    return (
        <a href="">
            <img
                className={is18 ? 'blur' : ''}
                src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true"
                alt=""
            />
        </a>

    )
}

interface CardType {
    is18?: true | false
    imgURL?: string | undefined
}