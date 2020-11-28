module.exports = {
  title: "标题",
  description: "介绍",
  head: [
    ['meta', {name:'author',content:"小李"}],
    [ 'meta', {name: 'Keywords',  content: '关键词巴拉巴拉'}],
    ['link', {rel:'icon',href:'/assets/img/favicon.ico'}]
  ],
  themeConfig: {
    // 是否显示导航栏
    // navbar: true,
    lastUpdated: '更新时间',
    logo: "/assets/img/logo.jpg",
    nav: [
      { text: "Home", link: "/" },
      { text: "myDoc", link: "/myDoc/" },
      { text: "External", link: "https://google.com" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [
          { text: "Chinese", link: "/language/chinese/" },
          { text: "Japanese", link: "/language/japanese/" },
        ],
      },
    ],
    sidebar: {
        '/myDoc/': [
            '',     /* /foo/ */
            'a',  /* /foo/one.html */
            'b'   /* /foo/two.html */
          ],
    }
    
    ,
  },
};
