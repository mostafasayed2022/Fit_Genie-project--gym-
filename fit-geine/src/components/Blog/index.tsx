import React from "react";
import { useBlog } from "../../hooks/useBlog";
import sports from "../../images/sports.jpg";

const Blog: React.FC = () => {
  const { articles, loading, error } = useBlog();

  return (
    <div className="pt-20 bg-dark min-h-screen">
      <div 
        className='h-[250px] md:h-[400px] flex items-center justify-center bg-cover bg-fixed bg-center relative overflow-hidden' 
        style={{ backgroundImage: `url(${sports})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <h1 className="text-4xl sm:text-5xl md:text-8xl text-white relative z-10 tracking-tighter uppercase font-black italic px-6 text-center leading-none" data-aos="zoom-in">
          HEALTH <span className="text-primary italic font-['Outfit']">BLOG</span>
        </h1>
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-32">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-6">
             <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
             <p className="text-white/40 animate-pulse uppercase tracking-[0.4em] text-[10px] font-bold">Fetching latest news</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 glass-card max-w-lg mx-auto border border-red-500/20 bg-red-500/5 px-8">
            <p className="text-red-400 mb-8 font-bold uppercase tracking-widest text-xs leading-relaxed">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="btn-primary !px-10 !py-3 !text-[10px] uppercase font-black tracking-widest"
            >
              Retry Connection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {articles.map((article, index) => (
              <div 
                key={index} 
                className="glass-card !p-0 overflow-hidden flex flex-col group border border-white/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="relative h-56 md:h-64 overflow-hidden border-b border-white/5">
                  <img 
                    src={article.urlToImage} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute top-4 left-4 bg-primary text-black font-black text-[9px] px-3 py-1.5 rounded-lg uppercase tracking-tighter shadow-xl">
                    Health Tips
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-white/5 group-hover:bg-white/[0.08] transition-colors duration-500">
                  <h3 className="text-lg lg:text-xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300 italic uppercase tracking-tighter leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-white/40 text-xs md:text-sm mb-10 line-clamp-3 leading-relaxed flex-grow font-medium">
                    {article.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-3 group-hover:gap-5 transition-all duration-500"
                    >
                      READ FULL <span className="text-xl leading-none">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
