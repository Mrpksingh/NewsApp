import React, { Component } from 'react'
import Newsitems from './Newsitems'
import InfiniteScroll from "react-infinite-scroll-component";

export default class Home extends Component {
  constructor(){
    super()
    this.state={
      articles:[],
      totalresult:0
    }
  }
  getAPIData=async()=>{
    var response = ""
    if(this.props.search)
     var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=1&Language=${this.props.language}&apiKey=e2cd52952bde4df2970577f33fc9bf74`)
     else
     var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=1&Language=${this.props.language}&apiKey=e2cd52952bde4df2970577f33fc9bf74`)
     var data = await response.json()
     this.setState({
      articles:data.articles,
      totalresult:data.totalresult,
      page:1
     })
  }
  componentDidMount(){
    this.getAPIData()
  }
  componentDidUpdate(oldprops){
    if(this.props!==oldprops){
      this.getAPIData()
    }
  }
  fetchMoreData =async()=>{
    this.setState({page:this.state.page+1})
    var response = ""
    if(this.props.search)
     var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=${this.state.page}&Language=${this.props.language}&apiKey=e2cd52952bde4df2970577f33fc9bf74`)
     else
     var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}&Language=${this.props.language}&apiKey=e2cd52952bde4df2970577f33fc9bf74`)
     var data = await response.json()
     this.setState({articles:this.state.articles.concat(data.articles)})
  }
  render() {
    return (
      <>
      <h5 className='text-center text-light p-2 nav-bg mt-1'>{this.props.q} News section</h5>
       <div className="container-fluid">
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
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
        this.state.articles.map((item,index)=>{
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
}
