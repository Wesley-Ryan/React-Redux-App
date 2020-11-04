import React, { useEffect } from 'react';
import { connect } from "react-redux"

import { getArticles } from '../store/actions'

import NewsCard from './NewsCard'
import Loading from './Loading'

  

const NewsList = (props) => {

        useEffect(() => { 
        props.getArticles()
    }, [])


    return (
        <div className='app-container'>
             {props.isLoading && <Loading /> } 
             {props.articlesData.map((article, index) => { 
                return <NewsCard article={article} key={index}  />
             })}
             
           
        </div>
      );
}

const mapStateToProps = (state) => { 
    return { 
        isLoading: state.isLoading, 
        articlesData: state.articlesData, 
        error: state.error
    }
}
 
export default connect(mapStateToProps, { getArticles })(NewsList);



