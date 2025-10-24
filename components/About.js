function About() {
  try {
    const cards = [
      {
        icon: 'sparkles',
        title: '极简设计',
        description: '追求简洁优雅的视觉呈现，让设计回归本质，用最少的元素传达最多的信息'
      },
      {
        icon: 'code',
        title: '前端开发',
        description: '5年行业经验，精通现代前端技术栈，注重代码质量和性能优化'
      },
      {
        icon: 'heart',
        title: '用户体验',
        description: '以用户为中心，关注每一个交互细节，打造流畅自然的使用体验'
      },
      {
        icon: 'lightbulb',
        title: '创意思维',
        description: '善于将创意想法转化为现实产品，在技术与艺术之间找到完美平衡'
      }
    ];

    return (
      <section 
        id="about"
        className="section-padding px-6 bg-[var(--secondary-color)]"
        data-name="about" 
        data-file="components/About.js"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[var(--text-primary)]">
            关于我
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            我是一名专注于前端开发的工程师，追求代码的优雅与性能的平衡
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
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
                    className="text-[var(--primary-color)]"
                  >
                    {card.icon === 'sparkles' && (
                      <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1Zm10-10a1 1 0 0 1 1 1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1 1 1 0 0 1 1-1Zm-18 0a1 1 0 0 1 1 1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1 1 1 0 0 1 1-1Zm15.5-6.5a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414Zm-12.828 12.828a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414Zm12.828-12.828a1 1 0 0 1 .002 1.414l-1 1a1 1 0 0 1-1.414-1.414l1-1a1 1 0 0 1 1.414-.002Zm-12.828 12.828a1 1 0 0 1 .002 1.414l-1 1a1 1 0 0 1-1.414-1.414l1-1a1 1 0 0 1 1.414-.002Z" />
                    )}
                    {card.icon === 'code' && (
                      <React.Fragment>
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </React.Fragment>
                    )}
                    {card.icon === 'heart' && (
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
                    )}
                    {card.icon === 'lightbulb' && (
                      <React.Fragment>
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.6 1.5 2.5" />
                        <path d="M9 18h6M10 22h4" />
                      </React.Fragment>
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)]">{card.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}
