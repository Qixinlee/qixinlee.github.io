function Portfolio() {
  try {
    const projects = [
      {
        title: '电商平台设计',
        description: '使用React和Tailwind CSS构建的现代化电商网站，注重用户体验和响应式设计',
        icon: 'shopping-cart',
        tech: ['React', 'Tailwind CSS', 'UI/UX'],
        category: 'web',
        color: 'from-blue-500 to-purple-600'
      },
      {
        title: '移动应用界面',
        description: '为健康管理应用设计的简洁界面，采用扁平化设计风格',
        icon: 'smartphone',
        tech: ['Figma', 'UI设计', '移动端'],
        category: 'mobile',
        color: 'from-green-500 to-teal-600'
      },
      {
        title: '企业官网重设计',
        description: '为科技公司打造的品牌官网，强调专业性和现代感',
        icon: 'layout',
        tech: ['HTML/CSS', 'JavaScript', '品牌设计'],
        category: 'web',
        color: 'from-indigo-500 to-blue-600'
      },
      {
        title: '数据分析仪表板',
        description: '为金融公司设计的数据可视化仪表板，支持实时数据展示',
        icon: 'bar-chart-4',
        tech: ['React', 'D3.js', '数据可视化'],
        category: 'dashboard',
        color: 'from-purple-500 to-pink-600'
      },
      {
        title: '品牌视觉识别',
        description: '为初创公司设计的完整的品牌视觉识别系统',
        icon: 'palette',
        tech: ['Adobe Creative Suite', '品牌设计', 'VI'],
        category: 'branding',
        color: 'from-yellow-500 to-orange-600'
      },
      {
        title: 'AR购物体验',
        description: '增强现实技术在购物场景中的应用，提供沉浸式体验',
        icon: 'glasses',
        tech: ['ARKit', 'Unity', '3D设计'],
        category: 'ar',
        color: 'from-red-500 to-pink-600'
      }
    ];

    const [activeFilter, setActiveFilter] = React.useState('all');
    
    const filteredProjects = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);

    return (
      <section 
        id="portfolio"
        className="section-padding px-6 bg-gradient-to-br from-white to-[var(--secondary-color)] relative overflow-hidden"
        data-name="portfolio" 
        data-file="components/Portfolio.js"
      >
        {/* 背景装饰元素 */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary-color)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-[var(--text-primary)] relative inline-block">
              <span>我的作品</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--primary-color)] transform scale-x-50 transition-transform duration-300 group-hover:scale-100"></div>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
              探索我的创意项目，每一个都是对设计与技术完美结合的追求
            </p>
            
            {/* 筛选按钮 */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['all', 'web', 'mobile', 'dashboard', 'branding', 'ar'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-[var(--primary-color)] text-white shadow-lg shadow-[var(--primary-color)]/30'
                      : 'bg-white text-[var(--text-primary)] border border-gray-200 hover:bg-[var(--primary-color)] hover:text-white'
                  }`}
                >
                  {filter === 'all' && '全部项目'}
                  {filter === 'web' && '网页设计'}
                  {filter === 'mobile' && '移动应用'}
                  {filter === 'dashboard' && '数据仪表板'}
                  {filter === 'branding' && '品牌设计'}
                  {filter === 'ar' && 'AR体验'}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* 使用矢量图标作为项目图像区域 */}
                <div 
                  className={`relative h-56 flex items-center justify-center bg-gradient-to-br ${project.color} transition-all duration-500`}
                  loading="lazy"
                >
                  <div className="text-white text-center p-6">
                    <svg 
                      className="mx-auto mb-4 text-white" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="96" 
                      height="96" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      {project.icon === 'shopping-cart' && (
                        <React.Fragment>
                          <circle cx="8" cy="21" r="1" />
                          <circle cx="19" cy="21" r="1" />
                          <path d="M2.05 2.05h2l1.92 5.9L7.05 10H18a1 1 0 0 1 1 1v1.08l1.71 4.36c.15.39.24.81.28 1.25" />
                          <path d="M7.05 10V6.5a2.5 2.5 0 0 1 2.5-2.5h.72a2.5 2.5 0 0 1 2.4 1.8L14 10" />
                        </React.Fragment>
                      )}
                      {project.icon === 'smartphone' && (
                        <React.Fragment>
                          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                          <path d="M12 18h.01" />
                        </React.Fragment>
                      )}
                      {project.icon === 'layout' && (
                        <React.Fragment>
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <path d="M3 9h18" />
                          <path d="M9 21V9" />
                        </React.Fragment>
                      )}
                      {project.icon === 'bar-chart-4' && (
                        <React.Fragment>
                          <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                          <path d="M7 16h8" />
                          <path d="M7 11h12" />
                          <path d="M7 6h3" />
                        </React.Fragment>
                      )}
                      {project.icon === 'palette' && (
                        <React.Fragment>
                          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                          <path d="M12 2a8 8 0 0 0-8 8c0 2.4.93 4.5 2.4 6" />
                          <path d="M12 22c3.5 0 6-2.5 6-6 0-2.4-.93-4.5-2.4-6" />
                        </React.Fragment>
                      )}
                      {project.icon === 'glasses' && (
                        <React.Fragment>
                          <circle cx="6" cy="15" r="4" />
                          <circle cx="18" cy="15" r="4" />
                          <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
                          <path d="M7.5 15h9" />
                        </React.Fragment>
                      )}
                    </svg>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/80 mt-2 text-sm">{project.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white/30 transition-colors">
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
                        className="text-white"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* 项目信息区域 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-[var(--secondary-color)] text-[var(--primary-color)] rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="flex items-center gap-2 text-[var(--primary-color)] font-medium hover:gap-3 transition-all duration-300">
                      <span>查看详情</span>
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition-colors">
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
                          className="text-gray-600"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition-colors">
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
                          className="text-gray-600"
                        >
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                          <polyline points="16 6 12 2 8 6" />
                          <line x1="12" x2="12" y1="2" y2="15" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* 悬停效果遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)] to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Portfolio component error:', error);
    return null;
  }
}