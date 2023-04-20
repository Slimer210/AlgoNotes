import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AlgoNotes 演算法笔记",
  description: "A website full with algorithm notes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'C课程', link: '/c-programming/' },
      { text: 'DSA', link: '/DSA/' },
      { text: 'About', link: '/about' }
      
      
    ],

    sidebar: [
      {
        text: 'General',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Getting Started', link: '/get-started' }
        ]
      },
      {
        text: 'C Classes Notes C课程',
        items: [
          { text: 'General', link: '/c-programming/'       }
        ]
      },
      {
        text: 'DSA Competitive Programming 竞赛编程',
        items: [
          { text: 'General', link: '/c-programming/'       }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Slimer210' }
    ]
  }
})
