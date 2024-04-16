import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import index from "../About";
// import { Article } from "@mui/icons-material";
import "./blog.css";
const Blog = () => {
  const [blog, setBlog] = useState<Article[]>([]);

  interface Article {
    description: string;
    urlToImage: string | undefined;
    title: string;
    url: string;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=2b7ebd82fc8145e0aae2ac6d266718d3");
       // Filter out the card with the title 'Some title to remove'
       const filteredNews = response.data.articles.filter((article: { title: string; }) => article.title !== 'Some title to remove');
       setBlog(filteredNews);
      }
      catch (error) {
        console.error("Error fetching data: ", error)
      }
    };
    fetchData();

  }, []);



  return (
    <div>
      <Navbar loggedIn={undefined} />
      <div className="container">
        <h2>Health News</h2>
        <div className="row">
          {blog.map((article, index) => (
            <div className="col-md-4 mb-4 cardss" key={index}>
              <div className="cardd">
                <img src={article.urlToImage} alt={article.title} />
                <div className={`card-body item ${article.title === 'Some title to hide' ? 'hidden' : ''}`} key={index}>
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
