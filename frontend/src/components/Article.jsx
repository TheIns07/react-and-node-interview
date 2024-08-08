import React from 'react'

const Article = ({ author, title, description, url, urlToImage, publishedAt }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" style={styles.cardLink}>
        <div style={styles.card}>
            <img src={urlToImage} alt={title} style={styles.image} width={160} height={150} />
            <div style={styles.textContainer}>
                <h2 style={styles.title}>{title}</h2>
                <p style={styles.author}>{author}</p>
                <p style={styles.description}>{description}</p>
                <p style={styles.publishedAt}>{publishedAt}</p>
            </div>
        </div>
    </a>
    );
};

const styles = {
    cardLink: {
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        marginBottom: '20px',
        
    },
    card: {
        display: 'flex',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.2s',
    },
    cardHover: {
        transform: 'scale(1.02)',
    },
    image: {

        objectFit: 'cover',
    },
    textContainer: {
        padding: '15px',
        flex: 1,
    },
    title: {
        fontSize: '1.5rem',
        margin: '0 0 10px 0',
    },
    author: {
        fontSize: '1rem',
        margin: '0 0 10px 0',
        color: '#555',
    },
    description: {
        fontSize: '1rem',
        margin: '0 0 10px 0',
        color: '#333',
    },
    publishedAt: {
        fontSize: '0.875rem',
        color: '#888',
    },
};

export default Article;