import React, { Component } from 'react'

export class NewsIteam extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="Oops....! pic can not be displayed" />
                    <div className="card-body">
                        <h5 className="card-title">{title}.... ..</h5>
                        <p className="card-text">{description} click to read more.... ..</p>
                        <a href={newsUrl} target={title} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsIteam