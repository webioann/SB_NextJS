import React from 'react'

function Inner_Page({params}: {params: {category: string, productId: string}}) {
    return (
        <>
            <h1>Inner_Page</h1>
            <h2 style={{color: 'blue'}}>CAT {params.category}</h2>
            <h2 style={{color: 'blue'}}>ID {params.productId}</h2>
        </>
    )
}

export default Inner_Page;