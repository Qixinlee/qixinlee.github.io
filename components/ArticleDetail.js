// 文章详情组件，用于显示单篇文章内容
function ArticleDetail({ article, onBack }) {
  try {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto" data-name="article-detail" data-file="components/ArticleDetail.js">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button 
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-[var(--primary-color)] hover:text-blue-700 transition-colors"
          >
            <div className="icon-arrow-left"></div>
            <span>返回文章列表</span>
          </button>
          
          <article className="prose max-w-none">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">{article.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-8">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.category}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            
            <div 
              className="article-content text-[var(--text-secondary)] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ArticleDetail component error:', error);
    return null;
  }
}