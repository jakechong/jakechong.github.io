module.exports = {
  title: "Jake Chong",
  description: "My blog for random stuff",
  head: [
    ["link", { rel: "icon", href: "/img/logo.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "gungnir",
  themeConfig: {
    repo: 'jakechong/jakechong.github.io',
    docsDir: "src",
    docsBranch: "master",
    editLinks: true,
    lastUpdated: true,
    hitokoto: true,
    searchIcon: "ri-search-2-line",
    codeTheme: "gungnir-dark",
    rss: {
      site_url: "https://jakechong.github.io",
      copyright: "jakechong 2021-2021",
      count: 20
    },
    comment: {
      owner: "This-is-an-Apple",
      repo: "gitalk-comments",
      clientId: "d6247712dc288a5a60ca",
      clientSecret: "ed1ec72417828343c79ed910a1b77d140fa715a7"
    },
    analytics: {
      ga: "UA-146858305-1",
      ba: "75381d210789d3eaf855fa16246860cc"
    },
    katex: true,
    mdPlus: {
      all: true
    },
    readingTime: {
      excludes: ["/about", "/tags/.*", "/links"]
    },
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "About",
        link: "/about/",
        icon: "fa-paw"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "Links",
        link: "/links/",
        icon: "fa-satellite-dish"
      },
      {
        text: "Portfolio",
        link: "https://portfolio.zxh.io/",
        icon: "ri-space-ship-fill"
      }
    ],
    personalInfo: {
      name: "jakechong",
      avatar: "/img/avatar.jpg",
      description: "いつか、私がヒトじゃなくなっても",
      sns: {
        github: "jakechong",
        linkedin: "jaekyungchong",
        facebook: "sensitivethug33",
        twitter: "jakech0ng",
        email: "jakechong@berkeley.edu"
      }
    },
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/5.jpg"
      }
    ],
    pages: {
      tags: {
        title: "Tags",
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        title: "Links",
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },
    footer: `
      &copy; <a href="https://github.com/jakechong" target="_blank">jakechong</a> 2021-2021
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
