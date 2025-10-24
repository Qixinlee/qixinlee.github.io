function Header() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
        data-name="header" 
        data-file="components/Header.js"
      >
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-[var(--primary-color)]">启鑫</div>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors text-sm">
                主页
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors text-sm">
                关于我
              </button>
              <button onClick={() => scrollToSection('products')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors text-sm">
                付费产品
              </button>
              <button onClick={() => scrollToSection('articles')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors text-sm">
                文章
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors text-sm">
                作品集
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors text-sm">
                联系方式
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}