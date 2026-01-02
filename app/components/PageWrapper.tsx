import React from 'react'
import './page.css'

function PageWrapper( {title}: {title: string} ) {
    return (
        <section className='wrapper'>
            <h1 className='title'>{title}</h1>
        </section>
    )
}

export default PageWrapper