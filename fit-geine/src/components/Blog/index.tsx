import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./blog.css";
import "../Home/home.css"
import services from "../../images/services.jpg";

interface Article {
  description: string;
  urlToImage: string | undefined;
  title: string;
  url: string;
}

const Blog: React.FC = () => {
  const [blog, setBlog] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=2b7ebd82fc8145e0aae2ac6d266718d3");
        const filteredNews = response.data.articles.filter((article: Article) =>
          article.title !== 'Some title to remove' && article.urlToImage
        );
        setBlog(filteredNews);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar loggedIn={false} setToken={function (token: string): void {
        throw new Error('Function not implemented.');
      }} setLoggedIn={function (loggedIn: boolean): void {
        throw new Error('Function not implemented.');
      }} />      <div className="container">
        <div className='title_cards ' style={{ backgroundImage: `url(${services})` }}>
          Blog page
        </div>   
        <div className="row">
          {blog.map((article, index) => (
            <div className="col-md-4 mb-4 cardssss" key={index}>
              <div className="carddd">
                <img src={article.urlToImage} alt={article.title} />
                <div className={`card-body item ${article.title === 'Some title to hide' ? 'hidden' : ''}`}>
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-description">{article.description}</p>
                  <a href={article.url} className="card-button" target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
