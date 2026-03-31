import { useState, useEffect } from "react";
import axios from "axios";

interface Article {
  description: string;
  urlToImage: string | undefined;
  title: string;
  url: string;
}

export const useBlog = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Using US health news for better coverage, but keeping the same API key
                const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=2b7ebd82fc8145e0aae2ac6d266718d3");
                const filteredNews = response.data.articles.filter((article: Article) =>
                    article.title && article.urlToImage && article.description
                );
                setArticles(filteredNews);
                setError(null);
            } catch (err) {
                console.error("Error fetching data: ", err);
                setError("Failed to load health news. Please check your internet or API key.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { articles, loading, error };
};
