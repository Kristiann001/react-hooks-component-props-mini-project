import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

function App() {
    return (
        <div className="App">
            <Header name="Overreacted" />
            <About image="https://via.placeholder.com/215" about="Personal blog by Dan Abramov." />
            <ArticleList />
        </div>
    );
}

export default App;
