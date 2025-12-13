import React, { useState } from 'react';

export default function AppTheme() {

    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

function Header() {
    return <header>Header</header>;
}

function Main() {
    return <main>Main</main>;
}

function Footer() {
    return <footer>Footer</footer>;
}
