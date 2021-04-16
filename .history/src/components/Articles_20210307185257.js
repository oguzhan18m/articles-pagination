import React from 'react';

const Articles = () => {
    return (
        <React.Fragment>
            <div className="pagination">
                <button data-testid="page-button">1</button>
            </div>

            <ul className="results">
                <li data-testid="result-row">Article Title</li>
            </ul>
        </React.Fragment>
    );
}

export default Articles;
