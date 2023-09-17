import React from 'react';
import "./App.css"
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Freelance from './components/freelance/freelance';
import Qualification from './components/qualification/qualification';
import Publication from './components/publication/publication';
import Work from './components/work/work';

const App = () => {
    return (
        <>
        <Header />

        <main className='main'>
            <Home />
            <About />
            <Skills />
            <Qualification />
            <Publication />
            <Freelance />
            <Work />
        </main>
        </>
    )
}

export default App