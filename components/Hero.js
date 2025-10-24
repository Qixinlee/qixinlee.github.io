function Hero() {
  try {
    return (
      <section 
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[var(--secondary-color)] pt-20 px-6"
        data-name="hero" 
        data-file="components/Hero.js"
      >
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-blue-400 flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-[var(--text-primary)]">
            你好，我是启鑫
          </h1>
          <p className="text-2xl text-[var(--primary-color)] mb-6">
            一名前端开发者
          </p>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            我热衷于创造简洁、优雅的用户界面，追求极致的用户体验。<br/>
            通过代码和设计，将想法转化为现实，是我最大的乐趣。
          </p>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}