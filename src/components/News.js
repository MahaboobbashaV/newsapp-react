import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';
import PropTypes from 'prop-types';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        try {
            props.setProgress(10);
            const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&page=${page}&max=${props.pageSize}&apikey=${props.apiKey}`;
            setLoading(true);
            let data = await fetch(url);
            props.setProgress(30);
            let parsedData = await data.json();
            props.setProgress(70);

            if (parsedData.articles) {
                setArticles(parsedData.articles);
                setTotalResults(parsedData.totalResults);
            } else {
                setArticles([]);
                setTotalResults(0);
            }
            setLoading(false);
            props.setProgress(100);
        } catch (error) {
            console.error("Error fetching the news data", error);
            setLoading(false);
            props.setProgress(100);
        }
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    }, [page]);

    const handlePrevClick = async () => {
        setPage(page - 1);
    }

    const handleNextClick = async () => {
        setPage(page + 1);
    }

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Loader />}
            <div className="container">
                <div className="row">
                    {articles && articles.map((element, index) => {
                        if (element) {
                            return (
                                <div className="col-md-4" key={index}>
                                    <NewsItem
                                        title={element.title ? element.title : "No Title"}
                                        description={element.description ? element.description : "No Description"}
                                        idUrl={element.url}
                                        imageUrl={element.image}
                                        author={element.source.name}
                                        date={element.publishedAt}
                                        source={element.source ? element.source.name : "Unknown Source"}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </>
    );
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
    setProgress: PropTypes.func.isRequired
}

export default News;
