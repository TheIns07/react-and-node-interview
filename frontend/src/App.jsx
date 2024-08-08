import React, { useState, useEffect } from 'react';
import './App.css'
import { fetchArticles } from './services/GetArticles.service';
import Article from './components/Article';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        console.log(data)
        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [])

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>Error: Articles not fetched.{error.message}</p>;

  return (
    <>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>Technews</h1>
      <h3 style={{ fontSize: '1rem', fontWeight: 'lighter',  textAlign: 'center' }}>The news for you</h3>

        {articles.map((article) => (
          <Article key={article._id}
            _id={article._id}
            urlToImage={article.urlToImage}
            title={article.title}
            description={article.description}
            url={article.url}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>



    </>
  )
}

export default App
