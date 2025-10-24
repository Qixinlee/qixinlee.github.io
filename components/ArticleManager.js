// 文章管理器
function ArticleManager() {
  // 示例文章数据
  this.articles = [
    {
      id: 1,
      slug: 'modern-design-system',
      title: '如何构建现代化的设计系统',
      date: '2025-10-15',
      category: '设计',
      excerpt: '设计系统是现代产品开发的核心，它统一了设计语言，提高了开发效率，本文深入探讨构建高效设计系统的核心要素与实施策略。',
      readTime: '8分钟阅读',
      content: `# 如何构建现代化的设计系统

设计系统不仅仅是组件库，更是团队协作的基础。它统一了设计语言，提高了开发效率，确保产品体验的一致性。

## 什么是设计系统？

设计系统是一套统一的设计和开发标准，包含：

- **设计原则**：指导整个设计决策的核心准则
- **UI组件库**：可复用的界面组件集合
- **设计规范**：间距、色彩、字体等设计标准
- **代码实现**：前端组件库和工具
- **使用文档**：详细的组件使用说明

## 设计系统的核心要素

### 1. 统一的设计语言
- **颜色系统**：定义品牌色彩、功能色彩和中性色彩
- **字体体系**：建立文字层级和排版规范
- **间距规范**：统一的间距和布局系统
- **图标风格**：保持一致的图标设计语言

### 2. 可复用的组件
- **原子组件**：按钮、输入框、标签等基础组件
- **分子组件**：表单、卡片、导航等组合组件
- **组织组件**：布局、页面模板等高级组件

## 实施步骤

1. **需求分析**：深入了解团队和产品的具体需求
2. **组件梳理**：整理现有组件，识别重复元素
3. **规范制定**：建立统一的设计和开发规范
4. **组件开发**：创建可复用的组件库
5. **文档编写**：制作详细的使用文档和示例
6. **推广使用**：培训团队成员，推动系统应用

## 最佳实践

- **保持简单**：组件应易于理解和使用
- **保持一致**：确保整个系统的一致性
- **持续迭代**：根据反馈不断完善
- **团队协作**：设计师和开发者紧密配合

通过建立完善的设计系统，可以显著提高开发效率和产品一致性，为用户提供更好的体验。`
    },
    {
      id: 2,
      slug: 'react-performance-optimization',
      title: 'React性能优化实战指南',
      date: '2025-10-08',
      category: '开发',
      excerpt: '深入探讨React应用的性能优化技巧，包括组件优化、状态管理、代码分割等实用方法，帮助开发者构建高性能的React应用。',
      readTime: '12分钟阅读',
      content: `# React性能优化实战指南

React应用的性能优化是前端开发的关键技能。本文将深入探讨各种优化技巧，帮助你构建高性能的React应用。

## 性能分析工具

在开始优化之前，首先要了解应用的性能瓶颈：

### React DevTools Profiler
- 安装React DevTools浏览器扩展
- 使用Profiler组件监控组件渲染
- 识别渲染时间长的组件

### Chrome DevTools
- Performance标签页分析渲染性能
- Memory标签页检查内存泄漏
- Network标签页监控资源加载

## 组件优化策略

### 1. 使用React.memo
对于不依赖复杂props的组件，使用React.memo避免不必要的重渲染：

\`\`\`jsx
const UserProfile = React.memo(({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
    </div>
  );
});
\`\`\`

### 2. 使用useCallback和useMemo
避免在渲染过程中创建新的函数或对象，防止子组件不必要的重渲染：

\`\`\`jsx
const UserList = ({ users, onSelect }) => {
  const handleSelect = useCallback(
    (id) => onSelect(id),
    [onSelect]
  );

  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
  }, [users]);

  return (
    <div>
      {sortedUsers.map(user => (
        <UserItem 
          key={user.id} 
          user={user} 
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};
\`\`\`

### 3. 代码分割和懒加载
使用React.lazy和Suspense实现组件的懒加载：

\`\`\`jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <div>
      <nav>
        <Link to="/dashboard">仪表板</Link>
        <Link to="/settings">设置</Link>
      </nav>
      
      <Suspense fallback={<div>加载中...</div>}>
        <Routes>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/settings" component={Settings} />
        </Routes>
      </Suspense>
    </div>
  );
}
\`\`\`

## 状态管理优化

### 1. 合理使用状态
- 将不相关的状态拆分成独立的state变量
- 避免不必要的状态嵌套
- 使用状态归一化减少状态复杂度

### 2. 使用useReducer处理复杂状态
对于复杂的状态逻辑，使用useReducer比useState更清晰：

\`\`\`jsx
const initialState = { count: 0, step: 1 };

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  return (
    <div>
      <p>计数: {state.count}</p>
      <p>步长: {state.step}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        增加
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        减少
      </button>
      <input 
        type="number" 
        value={state.step}
        onChange={(e) => dispatch({ 
          type: 'setStep', 
          payload: Number(e.target.value) 
        })}
      />
    </div>
  );
}
\`\`\`

通过合理的优化策略，可以显著提升React应用的性能和用户体验。`
    },
    {
      id: 3,
      slug: 'minimalist-design',
      title: '极简设计的艺术与科学',
      date: '2025-09-28',
      category: '设计',
      excerpt: '极简设计不仅仅是减少元素，更是一种设计哲学。本文探讨如何在极简中保持功能性和美感，创造优雅的用户体验。',
      readTime: '6分钟阅读',
      content: `# 极简设计的艺术与科学

少即是多不仅是一句口号，更是一种设计哲学。极简设计强调功能与美学的平衡，在简洁中传达核心信息。

## 极简设计的核心原则

### 1. 功能性优先
极简设计并非简单地减少元素，而是专注于核心功能。通过去除不必要的装饰，让用户更专注于重要信息和操作。

### 2. 留白的力量
留白（或负空间）是极简设计的重要元素，它能：
- 提高内容的可读性
- 引导用户的注意力
- 创造视觉平衡
- 传达高端感

### 3. 精心选择的色彩
极简设计通常使用有限的色彩方案：
- 以中性色为主（黑、白、灰）
- 用一个强调色突出重点
- 确保足够的对比度

## 实现极简设计的方法

### 1. 信息层级化
通过字体大小、颜色深浅、间距等方式建立清晰的信息层级，让用户能够快速理解内容的重要程度。

### 2. 一致的设计语言
- 统一的间距规范
- 一致的色彩使用
- 标准化的组件样式
- 连贯的交互体验

### 3. 减少认知负荷
- 简化导航结构
- 使用熟悉的图标和模式
- 减少不必要的选项
- 清晰的文案表达

## 极简设计的挑战

虽然极简设计看似简单，但实际执行起来却有很多挑战：

1. **平衡简洁与功能**：在保持简洁的同时确保功能完整性
2. **用户习惯适应**：新用户可能需要时间适应简洁的界面
3. **品牌特色保留**：在简化设计的同时保持品牌识别度

## 成功案例分析

许多知名产品都成功运用了极简设计理念：

- **Apple**：注重功能与美学的平衡
- **Google**：简洁的界面突出了核心功能
- **Muji**：将极简主义延伸到产品哲学

极简设计是一种需要深思熟虑的设计方法，它要求设计师对用户体验有深刻的理解。`
    },
    {
      id: 4,
      slug: 'tailwind-best-practices',
      title: 'Tailwind CSS最佳实践',
      date: '2025-09-20',
      category: '开发',
      excerpt: '掌握Tailwind CSS的最佳实践，提高开发效率，保持代码可维护性。本文分享实用技巧和高级用法。',
      readTime: '10分钟阅读',
      content: `# Tailwind CSS最佳实践

Tailwind CSS是一种功能类优先的CSS框架，它通过提供低级的实用类来构建定制设计，无需编写自定义CSS。

## 为什么选择Tailwind CSS

Tailwind CSS具有以下优势：

- **快速开发**：无需编写自定义CSS
- **一致性**：使用统一的设计系统
- **响应式**：内置响应式工具类
- **可定制**：可根据项目需求定制配置

## 配置Tailwind CSS

### 基本配置
\`\`\`js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#f1f5f9',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
\`\`\`

### 自定义主题
通过\`extend\`选项扩展默认主题配置，可以自定义颜色、间距、字体等。

## 最佳实践

### 1. 使用配置文件进行定制
将项目特定的样式定义在配置文件中：

\`\`\`js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }
    }
  }
}
\`\`\`

### 2. 合理使用@apply指令
对于多次使用的复杂类组合，可以使用@apply指令：

\`\`\`css
/* 在CSS文件中 */
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors;
}
\`\`\`

### 3. 创建可复用的组件
使用\`@layer\`指令创建组件：

\`\`\`css
@layer components {
  .btn {
    @apply px-4 py-2 rounded font-medium transition-colors;
  }
  .btn-primary {
    @apply bg-blue-500 text-white hover:bg-blue-600;
  }
  .card {
    @apply bg-white rounded-xl shadow-md p-6;
  }
}
\`\`\`

## 高级技巧

### 1. 使用变体修饰符
Tailwind提供了丰富的变体修饰符：

\`\`\`html
<!-- 响应式 -->
<div class="text-base md:text-lg lg:text-xl"></div>

<!-- 状态 -->
<button class="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></button>

<!-- 父元素状态 -->
<div class="group">
  <p class="group-hover:text-blue-500">悬停查看效果</p>
</div>

<!-- 状态变体 -->
<button class="bg-blue-500 enabled:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
  提交
</button>
\`\`\`

### 2. 自定义插件
创建自定义插件扩展Tailwind功能：

\`\`\`js
// tailwind plugin
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
  addComponents({
    '.card': {
      borderRadius: theme('borderRadius.lg'),
      boxShadow: theme('boxShadow.card'),
      padding: theme('spacing.6'),
    },
    '.btn-gradient': {
      background: theme('gradientColorStops.blue.500'),
      color: theme('colors.white'),
      padding: theme('padding.4'),
      borderRadius: theme('borderRadius.md'),
      '&:hover': {
        background: theme('gradientColorStops.blue.600'),
      }
    }
  })
})
\`\`\`

## 性能优化

### 1. 生产环境优化
在生产环境中，Tailwind CSS会自动移除未使用的样式，减少文件大小。

### 2. 使用Just-in-Time模式
在\`tailwind.config.js\`中启用JIT模式：

\`\`\`js
module.exports = {
  mode: 'jit',
  // ...
}
\`\`\`

## 与传统CSS框架的区别

Tailwind CSS与Bootstrap、Bulma等传统框架的主要区别在于：

- **思维方式**：功能类 vs 预设组件
- **灵活性**：高度可定制 vs 预定义样式
- **学习曲线**：需要记忆类名 vs 直接使用预设组件

通过掌握这些最佳实践，可以更高效地使用Tailwind CSS开发项目。`
    }
  ];

  this.getArticles = function() {
    return this.articles;
  };

  this.getArticleBySlug = function(slug) {
    return this.articles.find(article => article.slug === slug);
  };
}

const articleManager = new ArticleManager();

// 配置marked.js
marked.setOptions({
  breaks: true,
  gfm: true,
  sanitize: false,
  smartLists: true,
  smartypants: false
});