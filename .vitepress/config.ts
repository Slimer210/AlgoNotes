import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AlgoNotes 演算法笔记",
  description: "A website full with algorithm notes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'General',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Getting Started', link: '/get-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
