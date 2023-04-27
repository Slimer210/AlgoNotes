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
          { text: 'General', link: '/c-programming/'},
          { text: 'Class 01', link: '/c-programming/class-01'},
          { text: 'Class 02', link: '/c-programming/class-02'},
          { text: 'Class 03', link: '/c-programming/class-03'},
          { text: 'Class 04', link: '/c-programming/class-04'}
        ]
      },
      {
        text: 'DSA Competitive Programming 竞赛编程',
        items: [
          { text: 'General', link: '/dsa/'},
          { text: 'Chapter 1 - Getting Started with Setup', link: '/dsa/chap-1'},
          { text: 'Chapter 2 - Mathematical Formulas & Implementations', link: '/dsa/chap-2'},
          { text: 'Chapter 3 - Sorting Algorithms & Time Complexity', link: '/dsa/chap-3'},
          { text: 'Chapter 4 - Basic Data Structures', link: '/dsa/chap-4'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Slimer210' }
    ]
  }
})
