class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">出现错误</h1>
            <p className="text-gray-600 mb-4">抱歉，页面出现了问题</p>
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg">
              重新加载
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen bg-white" data-name="app" data-file="app.js">
        <Header />
        <Hero />
        <About />
        <Products />
        <Articles />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

// 在渲染前先处理文章内容
function processArticles() {
  const articles = articleManager.getArticles();
  articles.forEach(article => {
    // 检查marked是否存在，否则使用原始内容
    if (typeof marked !== 'undefined' && marked.parse) {
      article.processedContent = marked.parse(article.content, {
        breaks: true,
        gfm: true
      });
    } else {
      // 如果marked不可用，使用原始内容（虽然不会被渲染为HTML）
      article.processedContent = article.content;
    }
  });
}

// 初始化处理文章
processArticles();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);