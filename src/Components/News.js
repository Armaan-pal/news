import React, { Component } from 'react'
import NewsIteam from './NewsIteam';
import No_image from "../assets/No_image.png"


export class News extends Component {

    constructor() {
        super()
        console.log("this is a constructor from news");
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c8a129b81b9c483fbcce9ff1cde549cc&page=1&pageSize=18";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log("parsedData", parsedData)
        this.setState({ articles: parsedData.articles })
    }


    handelPrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c8a129b81b9c483fbcce9ff1cde549cc&page=${this.state.page - 1}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        })
    }


    handelNextClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c8a129b81b9c483fbcce9ff1cde549cc&page=${this.state.page + 1}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1
        })

    }


    render() {
        return (
            <div className="container my-3">
                <h2> TOP HEADLINES </h2>
                <div className="row">

                    {this.state.articles?.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsIteam title={element?.title?.slice(0, 40)} description={element?.description?.slice(0, 88)} imageUrl={element?.urlToImage || No_image} newsUrl={element.url} />
                        </div>

                    })}

                </div>

                <div className='container- d-flex justify-content-between'>

                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handelPrevClick}>Previous &larr;</button>
                    <button type="button" className="btn btn-dark" onClick={this.handelNextClick}>&rarr; Next</button>

                </div>

            </div>
        )
    }
}

export default News