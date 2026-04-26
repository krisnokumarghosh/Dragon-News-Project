import React from 'react';

const NewsCard = ({n}) => {
    return (
        <div>
            <p>{n.title}</p>
        </div>
    );
};

export default NewsCard;