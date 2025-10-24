function Products() {
  try {
    const products = [
      {
        icon: 'package',
        title: 'UI设计系统',
        price: '¥5000',
        description: '完整的设计系统模板，包含200+组件和设计规范，适用于企业级产品',
        features: ['200+ UI组件', '完整设计规范', '源文件交付', '终身更新']
      },
      {
        icon: 'book-open',
        title: '前端开发课程',
        price: '¥5000',
        description: '从零到一学习现代前端开发，包含实战项目和代码审查',
        features: ['20小时视频', '5个实战项目', '代码审查', '社群答疑']
      },
      {
        icon: 'zap',
        title: '网站定制服务',
        price: '¥5000起',
        description: '提供一对一网站设计与开发服务，打造独特的在线品牌形象',
        features: ['需求分析', '设计开发', '性能优化', '售后支持']
      }
    ];

    return (
      <section 
        id="products"
        className="section-padding px-6 bg-white"
        data-name="products" 
        data-file="components/Products.js"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[var(--text-primary)]">
            付费产品
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            精心打造的设计资源和服务，帮助你快速提升项目质量
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[var(--primary-color)] transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-[var(--primary-color)]"
                  >
                    {product.icon === 'package' && (
                      <React.Fragment>
                        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 18v-2" />
                        <path d="M3 8L12 13L21 8" />
                        <path d="M12 22V13" />
                      </React.Fragment>
                    )}
                    {product.icon === 'book-open' && (
                      <React.Fragment>
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </React.Fragment>
                    )}
                    {product.icon === 'zap' && (
                      <path d="M4 13h4v8L20 7h-4V2" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">{product.title}</h3>
                <div className="text-3xl font-bold text-[var(--primary-color)] mb-3">{product.price}</div>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
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
                        className="text-green-600"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-[var(--primary-color)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
                  了解详情
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Products component error:', error);
    return null;
  }
}