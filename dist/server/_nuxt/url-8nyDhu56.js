import { d as defineStore } from "../server.mjs";
const jsonData = [
  {
    id: "music",
    title: "Music",
    icon: "/icons/music.png",
    color: "pink",
    items: [
      {
        name: "Zing mp3",
        img: "https://lh3.googleusercontent.com/pw/ADCreHduJoPaKc3DvyLoLmVCcK_JGZme0awfVkt8WGHc3r6h8qnzDQIgoZpx1_m8naDGNb-Gs7faoKQadTjgc-j29XXbaNoa4JL0R-XBTZv8JTorHwI8aEEIGCP3zBvg_zKpm0clbD-e8Pco008oKbe6x0cZ=w600-h600-s-no?authuser=0",
        link: "https://zingmp3.vn/"
      },
      {
        name: "NCT",
        img: "https://lh3.googleusercontent.com/pw/ADCreHc_r6cHFykHbWjmlRhwkn6w3AOVhmwXtTpEGdLo8LbdIrqZ53nEf4JYOwOBORnggpJt1dXmgoy7uyYKWvzie19Bf7UCAenwpThEtPOdXoBVabD7-mZZHv2IiB7HZ-laZjHIwYtLOXCz-TEt-zLd4fFg=w31-h32-s-no?authuser=0",
        link: "http://www.nhaccuatui.com/"
      },
      {
        name: "SoundCloud",
        img: "https://lh3.googleusercontent.com/pw/ADCreHei_5cGLIHPDyd_R8iC04piwEYfv94iA-zNvdztIMBBiXK78rP7s3rf2gJoXqlPKviz-rD3YKVo8FrIndpuW53ySoh0k_GxQgTkuS8L2A9C80t0Q-fRG8uOgneS2rYCBO43HlxTWSw9UssHm04WGCB9=w180-h180-s-no?authuser=0",
        link: "https://soundcloud.com/"
      },
      {
        name: "Billboard 100",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdPe2pyD3w8qiWHKnNrfsLHu6NWEM7R2xoYVCg4rg-tZXIyquAWgGrWmsvLuuXFAXtpzgH5xX3gxt-ubhX41XGku3bu2Hi7kakYzSIjw5gjJImf7Zsf6KMEdDjukre8ZLPjDJLjyd5xfL4ObWtD3r5r=w225-h225-s-no?authuser=0",
        link: "https://www.billboard.com/charts/hot-100/"
      },
      {
        name: "Youtube",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcbQlwV3HjIdT-ebKrMuJNvwdsQ7ILTsq9Be6IgNcMrxuMYlcn82QiP3SFi1t0bRIgaLLb74Jc2tuet2BIarxs26jgoPeokge32eQ07yI1Nw4MehBVdUiknxTQ5xnCJzZG4pCYAO84UvYoDxQjXG9M7=w125-h125-s-no?authuser=0",
        link: "https://charts.youtube.com/?hl=vi"
      }
    ]
  },
  {
    id: "social_network",
    title: "Social networking",
    icon: "/icons/social_network.png",
    color: "blue",
    items: [
      {
        name: "Facebook",
        img: "https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico",
        link: "https://www.facebook.com/"
      },
      {
        name: "Instagram",
        img: "https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png",
        link: "https://www.instagram.com/"
      },
      {
        name: "Tiktok",
        img: "https://www.tiktok.com/favicon.ico",
        link: "https://www.tiktok.com/"
      },
      {
        name: "Twitter",
        img: "https://abs.twimg.com/favicons/twitter-pip.3.ico",
        link: "https://x.com/"
      },
      {
        name: "Snapchat",
        img: "https://static.snapchat.com/favicon.ico",
        link: "https://snapchat.com/"
      },
      {
        name: "LinkedIn",
        img: "https://static.licdn.com/aero-v1/sc/h/5bukxbhy9xsil5mb7c2wulfbx",
        link: "https://www.linkedin.com/"
      }
    ]
  },
  {
    id: "search_engine",
    title: "Search engine",
    icon: "/icons/search.png",
    color: "green",
    items: [
      {
        name: "Google",
        img: "https://lh3.googleusercontent.com/pw/AP1GczO22O1jLBihuYYrBt7I-odDK0LNUV1RP0mrvYS4HsrTH5Ec0DgUCXJjwJCKbr74_ID2jJ5La-wB6MTbmBi243kHbhm4BJ_GX4TSIkFlXgyLJ48_ikHUQ0FV8hp4QKk2uYC7qlTbgCJM5W3wVqzuSVkV=w512-h512-s-no-gm?authuser=0",
        link: "https://www.google.com.vn/"
      },
      {
        name: "Bing",
        img: "https://lh3.googleusercontent.com/pw/AP1GczOFSBIF4hAEO2DmvFum3ClqTd7fxT82_dvHlWhjFbzakhu1igDEZEQ7NHYzpPARIkCea9oB_josdTtK510bYMdGvE-CNjPVzdGwxY_T-jmeTDJDplG_oniQTb2jfvL2xwWkclY9BS9COvu1S2OtJRrd=w512-h512-s-no-gm?authuser=0",
        link: "https://www.bing.com/"
      },
      {
        name: "Yahoo!",
        img: "https://s.yimg.com/rz/l/favicon.ico",
        link: "https://www.yahoo.com/"
      },
      {
        name: "Baidu",
        img: "https://www.baidu.com/favicon.ico",
        link: "https://www.baidu.com/"
      },
      {
        name: "Yandex",
        img: "https://lh3.googleusercontent.com/pw/AP1GczMw4pWvyecvHgyA59DXTlCxgXjJaIVqqYk26aW0xJOUAna8wQEyJhtOMlp8lWX85vfVN4cN_xEYtw-rUCudbTzeMtSW4W-bpmgTE-oXl_n8YUYA_svBib4jLIEEOlyLvrJKq8BFkFP6mIo8sFv3_e1B=w512-h512-s-no-gm?authuser=0",
        link: "https://yastatic.net/s3/home-static/_/nova/3c8b3263.png"
      },
      {
        name: "DuckDuckGo",
        img: "https://lh3.googleusercontent.com/pw/AP1GczOkl3qH3iKO_fTNNC2wgy-hnR8vrO-nkrOMYo0zTXQJoHT82HTlyrGxVwxTztGqM-gGtp4Q0Baolr68dQxH2AyzoshGeGhOgHrm1M4YceJAQIxsHEPd7kWwEPa2I0kSc2FkVu88-hgcoQei63tV1uPo=w512-h512-s-no-gm?authuser=0",
        link: "https://duckduckgo.com/"
      },
      {
        name: "Ask.com",
        img: "https://www.ask.com/wp-content/uploads/sites/3/2021/10/cropped-ask-favicon-1.png?w=32",
        link: "https://www.ask.com/"
      },
      {
        name: "Aol.com",
        img: "https://s.yimg.com/cv/apiv2/aolfp/images/favicon/favicon-32x32.png",
        link: "https://www.aol.com/"
      },
      {
        name: "Lycos",
        img: "https://ly.lygo.net/static/lycos/img/favicon.ico",
        link: "https://www.lycos.com/"
      },
      {
        name: "Wolframalpha.com",
        img: "https://www.wolframalpha.com/_next/static/images/favicon_1zbE9hjk.ico",
        link: "https://www.wolframalpha.com/"
      }
    ]
  },
  {
    id: "browser",
    title: "Browser",
    icon: "/icons/browser.png",
    color: "cyan",
    items: [
      {
        name: "Google",
        img: "https://lh3.googleusercontent.com/pw/AP1GczO22O1jLBihuYYrBt7I-odDK0LNUV1RP0mrvYS4HsrTH5Ec0DgUCXJjwJCKbr74_ID2jJ5La-wB6MTbmBi243kHbhm4BJ_GX4TSIkFlXgyLJ48_ikHUQ0FV8hp4QKk2uYC7qlTbgCJM5W3wVqzuSVkV=w512-h512-s-no-gm?authuser=0",
        link: "https://www.google.com.vn/"
      },
      {
        name: "Bing",
        img: "https://lh3.googleusercontent.com/pw/AP1GczOFSBIF4hAEO2DmvFum3ClqTd7fxT82_dvHlWhjFbzakhu1igDEZEQ7NHYzpPARIkCea9oB_josdTtK510bYMdGvE-CNjPVzdGwxY_T-jmeTDJDplG_oniQTb2jfvL2xwWkclY9BS9COvu1S2OtJRrd=w512-h512-s-no-gm?authuser=0",
        link: "https://www.bing.com/"
      },
      {
        name: "Yahoo!",
        img: "https://avatars.mds.yandex.net/i?id=a4cbc30a98be8703628beaebe0acac5ef28011f7-9989050-images-thumbs&n=13",
        link: ""
      },
      {
        name: "Baidu",
        img: "https://lh3.googleusercontent.com/pw/AP1GczOFSBIF4hAEO2DmvFum3ClqTd7fxT82_dvHlWhjFbzakhu1igDEZEQ7NHYzpPARIkCea9oB_josdTtK510bYMdGvE-CNjPVzdGwxY_T-jmeTDJDplG_oniQTb2jfvL2xwWkclY9BS9COvu1S2OtJRrd=w512-h512-s-no-gm?authuser=0",
        link: "https://www.bing.com/"
      },
      {
        name: "Yandex",
        img: "https://lh3.googleusercontent.com/pw/AP1GczMw4pWvyecvHgyA59DXTlCxgXjJaIVqqYk26aW0xJOUAna8wQEyJhtOMlp8lWX85vfVN4cN_xEYtw-rUCudbTzeMtSW4W-bpmgTE-oXl_n8YUYA_svBib4jLIEEOlyLvrJKq8BFkFP6mIo8sFv3_e1B=w512-h512-s-no-gm?authuser=0",
        link: "https://yandex.com/"
      },
      {
        name: "DuckDuckGo",
        img: "https://lh3.googleusercontent.com/pw/AP1GczOkl3qH3iKO_fTNNC2wgy-hnR8vrO-nkrOMYo0zTXQJoHT82HTlyrGxVwxTztGqM-gGtp4Q0Baolr68dQxH2AyzoshGeGhOgHrm1M4YceJAQIxsHEPd7kWwEPa2I0kSc2FkVu88-hgcoQei63tV1uPo=w512-h512-s-no-gm?authuser=0",
        link: "https://duckduckgo.com/"
      },
      {
        name: "Ask.com",
        img: "https://lh3.googleusercontent.com/pw/AP1GczMw4pWvyecvHgyA59DXTlCxgXjJaIVqqYk26aW0xJOUAna8wQEyJhtOMlp8lWX85vfVN4cN_xEYtw-rUCudbTzeMtSW4W-bpmgTE-oXl_n8YUYA_svBib4jLIEEOlyLvrJKq8BFkFP6mIo8sFv3_e1B=w512-h512-s-no-gm?authuser=0",
        link: ""
      },
      {
        name: "Aol.com",
        img: "https://lh3.googleusercontent.com/pw/AP1GczOkl3qH3iKO_fTNNC2wgy-hnR8vrO-nkrOMYo0zTXQJoHT82HTlyrGxVwxTztGqM-gGtp4Q0Baolr68dQxH2AyzoshGeGhOgHrm1M4YceJAQIxsHEPd7kWwEPa2I0kSc2FkVu88-hgcoQei63tV1uPo=w512-h512-s-no-gm?authuser=0",
        link: ""
      },
      {
        name: "Lycos",
        img: "https://lh3.googleusercontent.com/pw/AP1GczMw4pWvyecvHgyA59DXTlCxgXjJaIVqqYk26aW0xJOUAna8wQEyJhtOMlp8lWX85vfVN4cN_xEYtw-rUCudbTzeMtSW4W-bpmgTE-oXl_n8YUYA_svBib4jLIEEOlyLvrJKq8BFkFP6mIo8sFv3_e1B=w512-h512-s-no-gm?authuser=0",
        link: ""
      },
      {
        name: "Wolframalpha.com",
        img: "https://lh3.googleusercontent.com/pw/AP1GczMw4pWvyecvHgyA59DXTlCxgXjJaIVqqYk26aW0xJOUAna8wQEyJhtOMlp8lWX85vfVN4cN_xEYtw-rUCudbTzeMtSW4W-bpmgTE-oXl_n8YUYA_svBib4jLIEEOlyLvrJKq8BFkFP6mIo8sFv3_e1B=w512-h512-s-no-gm?authuser=0",
        link: ""
      }
    ]
  },
  {
    id: "youtube_download",
    title: "Youtube download",
    icon: "/icons/youtube_download.png",
    color: "red",
    items: [
      {
        name: "Zing mp3",
        img: "https://lh3.googleusercontent.com/pw/ADCreHduJoPaKc3DvyLoLmVCcK_JGZme0awfVkt8WGHc3r6h8qnzDQIgoZpx1_m8naDGNb-Gs7faoKQadTjgc-j29XXbaNoa4JL0R-XBTZv8JTorHwI8aEEIGCP3zBvg_zKpm0clbD-e8Pco008oKbe6x0cZ=w600-h600-s-no?authuser=0",
        link: "https://zingmp3.vn/"
      },
      {
        name: "NCT",
        img: "https://lh3.googleusercontent.com/pw/ADCreHc_r6cHFykHbWjmlRhwkn6w3AOVhmwXtTpEGdLo8LbdIrqZ53nEf4JYOwOBORnggpJt1dXmgoy7uyYKWvzie19Bf7UCAenwpThEtPOdXoBVabD7-mZZHv2IiB7HZ-laZjHIwYtLOXCz-TEt-zLd4fFg=w31-h32-s-no?authuser=0",
        link: "http://www.nhaccuatui.com/"
      },
      {
        name: "SoundCloud",
        img: "https://avatars.mds.yandex.net/i?id=a4cbc30a98be8703628beaebe0acac5ef28011f7-9989050-images-thumbs&n=13",
        link: ""
      },
      {
        name: "Billboard 100",
        img: "https://avatars.mds.yandex.net/i?id=a4cbc30a98be8703628beaebe0acac5ef28011f7-9989050-images-thumbs&n=13",
        link: ""
      },
      {
        name: "Youtube",
        img: "https://avatars.mds.yandex.net/i?id=a4cbc30a98be8703628beaebe0acac5ef28011f7-9989050-images-thumbs&n=13",
        link: ""
      }
    ]
  },
  {
    id: "wallpaper",
    title: "Wallpaper",
    icon: "/icons/wallpaper.png",
    color: "orange",
    items: [
      {
        name: "Google",
        img: "https://lh3.googleusercontent.com/pw/AP1GczO22O1jLBihuYYrBt7I-odDK0LNUV1RP0mrvYS4HsrTH5Ec0DgUCXJjwJCKbr74_ID2jJ5La-wB6MTbmBi243kHbhm4BJ_GX4TSIkFlXgyLJ48_ikHUQ0FV8hp4QKk2uYC7qlTbgCJM5W3wVqzuSVkV=w512-h512-s-no-gm?authuser=0",
        link: "https://www.google.com.vn/"
      },
      {
        name: "Bing",
        img: "https://lh3.googleusercontent.com/pw/AP1GczOFSBIF4hAEO2DmvFum3ClqTd7fxT82_dvHlWhjFbzakhu1igDEZEQ7NHYzpPARIkCea9oB_josdTtK510bYMdGvE-CNjPVzdGwxY_T-jmeTDJDplG_oniQTb2jfvL2xwWkclY9BS9COvu1S2OtJRrd=w512-h512-s-no-gm?authuser=0",
        link: "https://www.bing.com/"
      },
      {
        name: "Yahoo!",
        img: "https://avatars.mds.yandex.net/i?id=a4cbc30a98be8703628beaebe0acac5ef28011f7-9989050-images-thumbs&n=13",
        link: ""
      },
      {
        name: "Baidu",
        img: "https://lh3.googleusercontent.com/pw/AP1GczOFSBIF4hAEO2DmvFum3ClqTd7fxT82_dvHlWhjFbzakhu1igDEZEQ7NHYzpPARIkCea9oB_josdTtK510bYMdGvE-CNjPVzdGwxY_T-jmeTDJDplG_oniQTb2jfvL2xwWkclY9BS9COvu1S2OtJRrd=w512-h512-s-no-gm?authuser=0",
        link: "https://www.bing.com/"
      },
      {
        name: "Yandex",
        img: "https://lh3.googleusercontent.com/pw/AP1GczMw4pWvyecvHgyA59DXTlCxgXjJaIVqqYk26aW0xJOUAna8wQEyJhtOMlp8lWX85vfVN4cN_xEYtw-rUCudbTzeMtSW4W-bpmgTE-oXl_n8YUYA_svBib4jLIEEOlyLvrJKq8BFkFP6mIo8sFv3_e1B=w512-h512-s-no-gm?authuser=0",
        link: "https://yandex.com/"
      },
      {
        name: "DuckDuckGo",
        img: "https://lh3.googleusercontent.com/pw/AP1GczOkl3qH3iKO_fTNNC2wgy-hnR8vrO-nkrOMYo0zTXQJoHT82HTlyrGxVwxTztGqM-gGtp4Q0Baolr68dQxH2AyzoshGeGhOgHrm1M4YceJAQIxsHEPd7kWwEPa2I0kSc2FkVu88-hgcoQei63tV1uPo=w512-h512-s-no-gm?authuser=0",
        link: "https://duckduckgo.com/"
      },
      {
        name: "Ask.com",
        img: "https://lh3.googleusercontent.com/pw/AP1GczMw4pWvyecvHgyA59DXTlCxgXjJaIVqqYk26aW0xJOUAna8wQEyJhtOMlp8lWX85vfVN4cN_xEYtw-rUCudbTzeMtSW4W-bpmgTE-oXl_n8YUYA_svBib4jLIEEOlyLvrJKq8BFkFP6mIo8sFv3_e1B=w512-h512-s-no-gm?authuser=0",
        link: ""
      },
      {
        name: "Aol.com",
        img: "https://lh3.googleusercontent.com/pw/AP1GczOkl3qH3iKO_fTNNC2wgy-hnR8vrO-nkrOMYo0zTXQJoHT82HTlyrGxVwxTztGqM-gGtp4Q0Baolr68dQxH2AyzoshGeGhOgHrm1M4YceJAQIxsHEPd7kWwEPa2I0kSc2FkVu88-hgcoQei63tV1uPo=w512-h512-s-no-gm?authuser=0",
        link: ""
      },
      {
        name: "Lycos",
        img: "https://lh3.googleusercontent.com/pw/AP1GczMw4pWvyecvHgyA59DXTlCxgXjJaIVqqYk26aW0xJOUAna8wQEyJhtOMlp8lWX85vfVN4cN_xEYtw-rUCudbTzeMtSW4W-bpmgTE-oXl_n8YUYA_svBib4jLIEEOlyLvrJKq8BFkFP6mIo8sFv3_e1B=w512-h512-s-no-gm?authuser=0",
        link: ""
      },
      {
        name: "Wolframalpha.com",
        img: "https://lh3.googleusercontent.com/pw/AP1GczMw4pWvyecvHgyA59DXTlCxgXjJaIVqqYk26aW0xJOUAna8wQEyJhtOMlp8lWX85vfVN4cN_xEYtw-rUCudbTzeMtSW4W-bpmgTE-oXl_n8YUYA_svBib4jLIEEOlyLvrJKq8BFkFP6mIo8sFv3_e1B=w512-h512-s-no-gm?authuser=0",
        link: ""
      }
    ]
  },
  {
    id: "recruitment",
    title: "Recruitment",
    icon: "/icons/recruitment.png",
    color: "red",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "magazine",
    title: "Magazine",
    icon: "/icons/magazine.png",
    color: "orange",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "news",
    title: "News",
    icon: "/icons/news.png",
    color: "yellow",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "shopping",
    title: "Shopping",
    icon: "/icons/shopping.png",
    color: "green",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "desktop_downloader",
    title: "Desktop downloader",
    icon: "/icons/desktop_downloader.png",
    color: "blue",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "football",
    title: "Football",
    icon: "/icons/football.png",
    color: "indigo",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "celeb",
    title: "Celebrity",
    icon: "/icons/celeb.png",
    color: "yellow",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "women",
    title: "Women",
    icon: "/icons/women.png",
    color: "yellow",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "politics",
    title: "Politics",
    icon: "/icons/politic.png",
    color: "cyan",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "technology",
    title: "Technology",
    icon: "/icons/technology.png",
    color: "green",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "tv_show",
    title: "TV show",
    icon: "/icons/tv.png",
    color: "indigo",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "car",
    title: "Car",
    icon: "/icons/car.png",
    color: "orange",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "economy",
    title: "Economy",
    icon: "/icons/economy.png",
    color: "green",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  },
  {
    id: "programming",
    title: "Programming",
    icon: "/icons/programming.png",
    color: "teal",
    items: [
      {
        name: "Vietnamworks",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeZQQPQvS_2OxAZ8hkv4d3kK33OVz6lsWsQYRZkO-m7BM2T3mH4pA0qdGYYPkOxtLt0hF3AVJqsNr4u-ncr_2AmJW37cjRtfSYEu2InI7YH5evW88jcKyydNUsPzgLXnsoSSaxEXF95wg_vEpC34zZr=w256-h256-s-no?authuser=0",
        link: "https://www.vietnamworks.com/tim-viec-lam/tim-tat-ca-viec-lam"
      },
      {
        name: "CarreerBuilder",
        img: "https://lh3.googleusercontent.com/pw/ADCreHd_FB8Akm0idMdOLBwDjag6tu9o1Z3eSZK_qxQ99HQ3Xvu0guM0SgAZFQ3stS66KiaKKRpEDgNHfS6TVS0bWujanfP2Qk8cnA6c1LEYqOYDBa_FyzewHButSs7j5AWcIWebalu26vuo9QcIeUHCVOPu=w225-h225-s-no?authuser=0",
        link: "https://careerbuilder.vn/"
      },
      {
        name: "Topdev",
        img: "https://lh3.googleusercontent.com/pw/ADCreHemePUOw5I5q4Ayh4o534PreJOL1nm_phvg1oWspPLhAVaPYLhANYzQm7rWG6NdGfX-ZmPK0EFfosQWFF6hDbDV3gPOj4Np-VZUToT2YgQrHex_p5pBWR7a5Y2558aHDmom9aNfSFJ4IHaShQiISpbq=w439-h439-s-no?authuser=0",
        link: "https://topdev.vn/"
      },
      {
        name: "Timviec365",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcL3DFEsf9pWhTaKpQXmzFVt8bLSsJm2ExlBPNCHEBgY9UPdmOm84QqnQoAI1X1QrbZSGH5BrHjEkGYjx1kNI0-yTlCQ_ivLgzPq9vqm6KIS_FfjbBrdTpdVrflqB0Mh9mpOehOta0oKGa7Mszurci4=w225-h225-s-no?authuser=0",
        link: "https://timviec365.vn/"
      },
      {
        name: "Việc làm 24h",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcHzAn51nd1Zp8bynTJNlSRPXoLQMTJmaHyAxDhHJ2TObUOCQsg4vYwtN_pJcMeFIQdxWDXnrejtpd4tQ80oz1ikVQwSod_q78qTmOgjEHsiGyk1wpHu986chyKH6teeV4GDaeJvM6uGKmgnQImfw7H=w225-h225-s-no?authuser=0",
        link: "https://vieclam24h.vn/"
      },
      {
        name: "Top CV",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfVhfFJnEiaAPoYZZju97j4Jo60fYcrgfhDvaH7217LX7MkmHAJE2y44Mgl07mlyviUNgdymAKKfIZqtYT-tkPrCZqlnW48VY08D-wP5vDf-46Sr8r0aIv5kmBvkePoNbOxBArvXN5f9OV96mju71T4=w225-h225-s-no?authuser=0",
        link: "https://www.topcv.vn/viec-lam"
      },
      {
        name: "Jobstreet",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeSF_-QjRiP02YuJ6F9vXEhEOX0gkVMsSGUAiwkNrN5HWh13-8qxNbUv63Owl5r42_VYWwSnsZCokagD4aWDDmiKJ6Rk2ktS05K-3IwHrFy8RrbIREgcLcfEJe9l52TKuDBuWsJbC-0lB6GLAIIQt3q=w32-h32-s-no?authuser=0",
        link: "https://www.jobstreet.vn/"
      },
      {
        name: "123job",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeztweZpiTF9t8YCHqDpv9wI8t5PJcy4q4_ChCrZJ6JYXh98kHElmQdoBXsNdEU05DLSzd2y4f78YGTxeW_pGlJhbHfGaFYbjmZ7gfuJYf_blvpB17eDwXCbZXpGtJDV8i1vKy90U41dQ80pPBN8qtO=w32-h32-s-no?authuser=0",
        link: "https://123job.vn/"
      },
      {
        name: "Careerlink",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfmtQjM76wv_zndKGH9F0n54sETwebOZKFwHgz6fd08U50orXEh7Z2-3TH6biWJU3t3RLL_ezRdLqxpntwnsKn84AS_WpIwYXM3JKJ3eO1dzAs4f4mnO-TCcyfMI0wDdJ-GOKbNPXRXa1fcrW8uYeC0=w32-h32-s-no?authuser=0",
        link: "https://www.careerlink.vn/"
      },
      {
        name: "Jobsgo",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdyuzV_yBXr7776VvaSD-L4xB1yvUOV-ITciAYgO01JeVqsvFTD_xbI4XtokDETYlGqU1WNRx52v2-k_VuhRbMUURZVcw5UmnOhtZcdALBSTZsFGsi_JEcMk8QkxnLU1fCbWB52TWG7VlEX4ZlLvzop=w32-h32-s-no?authuser=0",
        link: "https://jobsgo.vn/"
      },
      {
        name: "Mywork",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfwbxRceRJhxhAajI1r_6Jx0WawJWeNvgICXPmWm0fyLPfD6dDnylknCnmMZsSTVnYwyES37xH_r2unMgCLa4saxjn-Dbq8pTUob0pA0BWRczOgaTNb-V8Ao4y1Yd_1O0FxKbuj7aogx7o4DNb-zR4t=w160-h160-s-no?authuser=0",
        link: "https://mywork.com.vn/"
      },
      {
        name: "Ybox",
        img: "https://lh3.googleusercontent.com/pw/ADCreHcfQC4vrlrqji5vc-q0YBFibb9iNhllaYVKaEQpE6sLPAO34XKsqKkRDecplwVpfGa2LghyZbC36Af9NnB_JdnfW-FBwS6ElQFlVSVup_Wm2whLwGz7UhJeK9pq03T9a4USojyNoh_J4gyE45AN2MEv=w32-h32-s-no?authuser=0",
        link: "https://ybox.vn/"
      },
      {
        name: "Joboko",
        img: "https://lh3.googleusercontent.com/pw/ADCreHdMat4_DBcdJ-4ecqBumji4cmDCVMHExjxBzOKHhasaXQ4WPMV84pp6pD2PbKdqUvCwQ0d_rcpTx0R2khpVClGuYHPSQf6DwiNf_XmWri-SVySdRzyNE9jC---0J_MDxuSNXDp1bN-TKOUCJSQ4LsAZ=w439-h220-s-no?authuser=0",
        link: "https://vn.joboko.com/"
      },
      {
        name: "Hoteljob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHfgIcjDuHM8udT8i3nNWdkhBQVb2nlmnfsa2eRHyHpx6XDeDnob5Nujo632kbQ9B_LIhjUHYSqDfNnyEAZ51T-aF2-HN64x5NQGxtQ_pwSUowG4_ShXYdGSkLmU20ZRtjc5D7n2pxfSVehQn8k--IXR=w32-h32-s-no?authuser=0",
        link: "https://www.hoteljob.vn/"
      },
      {
        name: "Iconicjob",
        img: "https://lh3.googleusercontent.com/pw/ADCreHeT1EGioKZzwGUEiX10iO0pr84-6qGVXaxYvFHd44rP15zyA2nU4239JCM6o3c_RltUEnq-j8Zo-opnKwh_uw5t55GwTiSoF1Ck2ChAES7kk9Kt1l_L3Z339oUUkOJt2ND0q21P-JORLzL1leqNjrVD=w16-h16-s-no?authuser=0",
        link: "https://iconicjob.vn//"
      }
    ]
  }
];
const useUrl = defineStore("url", {
  state: () => ({
    urls: jsonData
  }),
  getters: {
    getAllUrls(state) {
      return state.urls;
    },
    getCategories(state) {
      return state.urls.map((obj) => {
        const { items, ...rest } = obj;
        return rest;
      });
    }
    // actions: {
    // setUrls(data: Array<any>) {
    //     this.urls = data
    // }
    // },
  }
});
export {
  useUrl as u
};
//# sourceMappingURL=url-8nyDhu56.js.map