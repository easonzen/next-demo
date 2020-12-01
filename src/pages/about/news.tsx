import React, { Component } from 'react';
import Header from 'next/head';

class News extends Component {
    render() {
        return (
            <>
                <Header>
                    <title>新闻中心</title>
                    <meta content="新闻中心" key="新闻中心" />
                </Header>
                <div>News</div>
            </>
        );
    }
}

export default News;
