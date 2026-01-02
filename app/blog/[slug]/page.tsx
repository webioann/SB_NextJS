import React from 'react'

function Blog_Page({ params }: { params: { slug: string } }) {
    return (
        <h1>Blog_Page slug params {params.slug}</h1>
    )
}

export default Blog_Page;