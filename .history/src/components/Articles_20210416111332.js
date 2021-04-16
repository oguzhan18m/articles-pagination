import React,{useEffect} from 'react';
import axios from 'axios';

const Articles = () => {

useEffect(() => {
    
    const loadNextPage = async() => {
        let currentPage++;

        await axios.get(`https://jsonmock.hackerrank.com/api/articles?page=${currentPage}`)
        .then((res)=> console.log(res.data))
      };
      loadNextPage()

}, [])



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
