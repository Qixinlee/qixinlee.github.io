function Contact() {
  try {
    const contacts = [
      {
        icon: 'mail',
        title: '电子邮件',
        value: 'hi@qixinlee.com',
        description: '工作咨询或合作请发邮件联系',
        link: 'mailto:hi@qixinlee.com',
        color: 'bg-red-50',
        iconColor: 'text-red-600'
      },
      {
        icon: 'github',
        title: 'GitHub',
        value: '@qixinlee',
        description: '查看我的开源项目和代码',
        link: 'https://github.com/qixinlee/',
        color: 'bg-gray-100',
        iconColor: 'text-gray-800'
      },
      {
        icon: 'message-circle',
        title: '微信',
        value: 'test',
        description: '扫码添加微信好友交流',
        link: '#',
        color: 'bg-green-50',
        iconColor: 'text-green-600'
      }
    ];

    return (
      <section 
        id="contact"
        className="section-padding px-6 bg-white"
        data-name="contact" 
        data-file="components/Contact.js"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[var(--text-primary)]">
            联系方式
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-12">
            欢迎与我交流设计、开发或任何有趣的想法
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <a 
                key={index}
                href={contact.link}
                className="block bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[var(--primary-color)] hover:shadow-md transition-all"
              >
                <div className={`w-14 h-14 rounded-xl ${contact.color} flex items-center justify-center mb-4`}>
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
                    className={contact.iconColor}
                  >
                    {contact.icon === 'mail' && (
                      <React.Fragment>
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-10 7-10-7" />
                      </React.Fragment>
                    )}
                    {contact.icon === 'github' && (
                      <React.Fragment>
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 12h.01" />
                        <path d="M15 12h.01" />
                      </React.Fragment>
                    )}
                    {contact.icon === 'message-circle' && (
                      <React.Fragment>
                        <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-4h5.5" />
                        <path d="M16 19.01h.01" />
                      </React.Fragment>
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-1 text-[var(--text-primary)]">{contact.title}</h3>
                <p className="text-[var(--primary-color)] font-medium mb-2">{contact.value}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {contact.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}