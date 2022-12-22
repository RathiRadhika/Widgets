import React, { useEffect, useState } from "react";
import axios from 'axios';

const Search=()=>{

    const[term,setTerm]=useState('programming');
    const[results,setResults]=useState([]);

    //console.log(results);

    //console.log('I run Every time');

    const removeTags = (str) => {
        if (str === null || str === '') return false;
        else str = str.toString();
        return str.replace(/(<([^>]+)>)/gi, '');
    };

    useEffect(() => {
        const search = async () => {
          const {data}=await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
              action: 'query',
              list: 'search',
              origin: '*',
              format: 'json',
              srsearch: term,
            },
          });

          setResults(data.query.search);
        };
    
        if(term){
           search(); 
        }
        

        //Approch No-2
        // (async()=>{
        //     await axios.get('sdfg');
        // })();

        //Approch No.-3 (Using Promises)
        // axios.get('dsffg')
        //     .then((Response)=>{
        //         console.log('response data');
        //     });

        if(term && !results.length){
            search();
        } else{
            const timeOutID= setTimeout(()=>{
                if(term){
                    search(); 
                }
            },500);
    
            return ()=>{
                clearTimeout(timeOutID);
            };
        }
        
      }, [term]
    );
    
    const renderResults=results.map(result=>{
        return(
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                    {/* {removeTags(result.snippet)} */}
                </div>

            </div>
        )
    });
    return (
        <div className="ui form">
            <div className="ui field">
                <label>Enter Search </label>
                <input 
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    className="input"
                />
            </div>
            <div className="ui celled list">
                {renderResults}
            </div>
        </div>
    );
}

export default Search;