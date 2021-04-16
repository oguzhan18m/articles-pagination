import React,{useEffect} from 'react';

const Articles = () => {

useEffect(() => {
    
    function loadNextPage() {
        currentPage++;
        console.log(`Fetching page ${currentPage}`);
    
        https.get(
          `https://jsonmock.hackerrank.com/api/articles?page=${currentPage}`,
          (res) => {
            console.log(res.statusCode);
            let all_chunks = [];
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => {
              rawData += chunk;
            });
            res.on('end', () => {
              const parsedData = JSON.parse(rawData);
              dataUntilNow.splice(-1, 0, ...parsedData.data);
    
              const parsedPage = parseInt(parsedData.page);
              if (!isNaN(parsedPage) && typeof parsedData.total_pages == 'number' && parsedPage < parsedData.total_pages)
                loadNextPage();
              else
                console.log(dataUntilNow.map(e => e.Title));
            });
          }
        );
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
