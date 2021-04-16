import React,{useEffect, useState} from 'react';
import axios from 'axios';

const Articles = () => {
    const [currentPage,setCurrentPage] = useState(1);
    const [data,setData] = useState(1);


useEffect(() => {
    
    const loadNextPage = async() => {
        await axios.get(`https://jsonmock.hackerrank.com/api/articles?page=${currentPage}`)
        .then((res)=> 
            setData(res.data)
        )
      };
      
      loadNextPage();

}, [])

    console.log(data);

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
