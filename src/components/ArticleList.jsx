import React from 'react';
import Article from './Article';

const articles = [
    { id: 1, title: 'The Wet Codebase', date: 'July 13, 2020', preview: 'Come waste your time with me.' },
    { id: 2, title: 'Goodbye, Clean Code', date: 'January 11, 2020', preview: 'Let clean code guide you. Then let it go.' },
    { id: 3, title: 'My Decade in Review', date: 'January 1,2020', preview: 'A personal reflection' }
];

function ArticleList() {
    return (
        <main>
            {articles.map(article => (
                <Article
                    key={article.id}
                    title={article.title}
                    date={article.date}
                    preview={article.preview}
                />
            ))}
        </main>
    );
}

export default ArticleList;




