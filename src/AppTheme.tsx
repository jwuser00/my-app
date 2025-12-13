import React from 'react';
import DarkmodeContextProvider, { DarkmodeContext } from './context/DarkmodeContext';

export default function AppTheme() {

    return (
        <DarkmodeContextProvider>
            <Header />
            <Main>
                <User />
                <Profile />
            </Main>
            <Footer />
        </DarkmodeContextProvider>
    );
}

function Header() {
    return <header>Header</header>;
}

function Main({ children }: { children: React.ReactNode }) {
    return <main>{children}</main>;
}

function User() {
    return <div>User</div>;
}

function Profile() {
    const { darkMode } = React.useContext(DarkmodeContext);
    return <div>{darkMode ? 'dark' : 'light'}</div>;
}

function Footer() {
    const { toggleDarkMode } = React.useContext(DarkmodeContext);
    return <button onClick={toggleDarkMode}>toggle</button>;
}
