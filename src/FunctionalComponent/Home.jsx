import React, { useState,useEffect } from 'react'
import Newsitems from './Newsitems'
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home(props) {
  var [articles,setarticles]=useState([])
  var [totalresult,settotalresult]=useState(0)
  var [page,setpage]=useState(1)
const getAPIData=async()=>{
    var response = ""
    if(props.search)
     var response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=1&Language=${props.language}&apiKey=e2cd52952bde4df2970577f33fc9bf74`)
     else
     var response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=1&Language=${props.language}&apiKey=e2cd52952bde4df2970577f33fc9bf74`)
     var data = await response.json()
     setarticles(data.articles)
     settotalresult(data.totalsettotalresult)
  }
 useEffect(()=>{
  getAPIData()
 },[props])
 const fetchMoreData =async()=>{
    setpage(page+1)
    var response = ""
    if(this.props.search)
     var response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=${page}&Language=${props.language}&apiKey=e2cd52952bde4df2970577f33fc9bf74`)
     else
     var response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=${page}&Language=${props.language}&apiKey=e2cd52952bde4df2970577f33fc9bf74`)
     var data = await response.json()
     setarticles(articles.concat(data.articles))
  }
    return (
      <>
      {/* <h5 className='text-center text-light p-2 nav-bg mt-1'>{props.q} News section</h5> */}
       <div className="container-fluid">
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={true}
          loader={
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
          }
        >
        <div className="row">
        {
        articles.map((item,index)=>{
            return <Newsitems
            key={index}
            pic={item.urlToImage}
            title={item.title}
            description={item.description}
            name={item.source.name}
            date={item.publishedAt}
            readmore={item.url}
            />
        })
       }
        </div>
        </InfiniteScroll>
       </div>
      </>
    )
}
