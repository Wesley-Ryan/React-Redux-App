import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap'


const NewsCard = (props) => {
    const {article} = props
    return (
        <div>
            
            <Card style={{width: "40%"}}>
                <CardImg top width="100%" src={article.urlToImage} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{article.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{article.source.name}</CardSubtitle>
                <CardText>{article.description}.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
      );
}
 
export default NewsCard;