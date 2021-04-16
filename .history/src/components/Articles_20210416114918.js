import React,{useEffect, useState} from 'react';
import axios from 'axios';

const Articles = () => {
    const [currentPage,setCurrentPage] = useState(1);
    const [allData,setAllData] = useState([]);


useEffect(() => {
    
    const loadNextPage = async() => {
        await axios.get(`https://jsonmock.hackerrank.com/api/articles?page=${currentPage}`)
        .then((res)=> 
        setAllData(res.data)
        )
      };
      
      loadNextPage();

}, [])

    console.log(allData.data);

    const pages = [];
    for (let i = 1; i <= allData.total_pages; i++) {
      pages.push(i);
    }

    return (
        <React.Fragment>
            <div className="pagination">
                {pages.map((item)=>
                <button onClick={()=>setCurrentPage(item)} key={item} data-testid="page-button">{item}</button>
                )}
            </div>

            <ul className="results">
                {allData.data&&allData.data.map((item,index)=>{
                return <li key={index} data-testid="result-row">{item.title}</li>
                })}
            </ul>
        </React.Fragment>
    );
}

export default Articles;
