function Footer() {
  try {
    const socialLinks = [
      { name: 'GitHub', icon: 'github', url: '#' },
      { name: 'Behance', icon: 'dribbble', url: '#' },
      { name: 'Dribbble', icon: 'palette', url: '#' },
      { name: '微信', icon: 'message-circle', url: '#' }
    ];

    return (
      <footer 
        className="bg-[var(--text-primary)] text-white py-12 px-6"
        data-name="footer" 
        data-file="components/Footer.js"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors flex items-center justify-center"
                  aria-label={link.name}
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
                    className="text-white"
                  >
                    {link.icon === 'github' && (
                      <React.Fragment>
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 12h.01" />
                        <path d="M15 12h.01" />
                      </React.Fragment>
                    )}
                    {link.icon === 'dribbble' && (
                      <React.Fragment>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8.5 14.5c.5-.3 1.3-.4 2-.4.7 0 1.5.1 2.1.4" />
                        <path d="M8.5 10.5c.5-.3 1.3-.4 2-.4.7 0 1.5.1 2.1.4" />
                        <path d="M8.5 18.5c.5-.3 1.3-.4 2-.4.7 0 1.5.1 2.1.4" />
                        <path d="M8.5 6.5c.5-.3 1.3-.4 2-.4.7 0 1.5.1 2.1.4" />
                      </React.Fragment>
                    )}
                    {link.icon === 'palette' && (
                      <React.Fragment>
                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                        <path d="M12 2a8 8 0 0 0-8 8c0 2.4.93 4.5 2.4 6" />
                        <path d="M12 22c3.5 0 6-2.5 6-6 0-2.4-.93-4.5-2.4-6" />
                      </React.Fragment>
                    )}
                    {link.icon === 'message-circle' && (
                      <React.Fragment>
                        <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-4h5.5" />
                        <path d="M16 19.01h.01" />
                      </React.Fragment>
                    )}
                  </svg>
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400 text-center">
              © 2025 启鑫 | 设计与代码由我亲自完成
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}