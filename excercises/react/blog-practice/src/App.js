import React from 'react';
import Article from './Article';
import Header from './Header'
import "./index.css"

const App = () => {

    const articles = [
        {
            title: "Man must explore, and this is exploration at its greatest.",
            subTitle: "Problems look mighty small from 150 miles up",
            author: "Start Bootstrap",
            datePosted: "September 24, 2018"
        },
        {
            title: "I believe every human has a finite number of heartbeats.",
            subTitle: "I don't intend to waste any of mine.",
            author: "Start Bootstrap",
            datePosted: "September 18, 2018",
        },
        {
            title: "Science has not yet mastered prophecy",
            subTitle: "We predict too much for the next year and yet far too little for the next ten.",
            author: "Start Bootstrap",
            datePosted: "August 24, 2018"
        },
        {
            title: "Failure is not an option",
            subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            author: "Start Bootstrap",
            datePosted: "July 8, 2018"
        }
             
    ]

    const displayArticles = articles.map((article, i) => {
        return <Article key={article.name+i}
                        title={article.title}
                        subTitle={article.subTitle}
                        author={article.author}
                        datePosted={article.datePosted}
                        />
    })



    return (
        <div className="container">
            <Header />
            {displayArticles}
        </div>
    )
}

export default App;

