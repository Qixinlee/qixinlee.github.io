function Articles() {
  try {
    const [selectedArticle, setSelectedArticle] = React.useState(null);
    
    const handleArticleClick = (slug) => {
      const article = articleManager.getArticleBySlug(slug);
      if (article) {
        // 确保文章内容已处理
        if (!article.processedContent) {
          if (typeof marked !== 'undefined' && marked.parse) {
            article.processedContent = marked.parse(article.content);
          } else {
            article.processedContent = article.content;
          }
        }
        setSelectedArticle(article);
      }
    };

    const handleCloseModal = () => {
      setSelectedArticle(null);
    };

    const articles = articleManager.getArticles();

    return (
      <section 
        id="articles"
        className="section-padding px-6 bg-gradient-to-br from-white to-[var(--secondary-color)] relative overflow-hidden"
        data-name="articles" 
        data-file="components/Articles.js"
      >
        {/* 背景装饰元素 */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary-color)] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-[var(--text-primary)] relative inline-block">
              <span>文章分享</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--primary-color)] transform scale-x-30 transition-transform duration-300 group-hover:scale-100"></div>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              分享设计与开发的经验，记录学习与成长的点滴
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div 
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleArticleClick(article.slug)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1.5 bg-blue-50 text-[var(--primary-color)] rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)]">{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[var(--text-secondary)]">{article.readTime}</span>
                    <div className="flex items-center text-[var(--primary-color)] group-hover:gap-1 transition-all">
                      <span className="text-sm">阅读更多</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-[var(--primary-color)]"
                      >
                        <path d="m7 7 10 10M7 17L17 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 弹出卡片式文章详情 */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col transform transition-all duration-300 scale-95 animate-in fade-in-90 zoom-in-90 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 固定在右上角的关闭按钮 */}
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              
              <div className="p-8 overflow-y-auto flex-grow">
                <div className="pt-6">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">{selectedArticle.title}</h2>
                  
                  <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-8">
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.category}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  
                  <div 
                    className="article-content text-[var(--text-secondary)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.processedContent }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  } catch (error) {
    console.error('Articles component error:', error);
    return null;
  }
}