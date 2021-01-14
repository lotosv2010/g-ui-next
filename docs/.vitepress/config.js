module.exports = {
    title: 'g-ui 组件库', // 设置网站标题
    description: 'ui 库', //描述
    dest: './build', // 设置输出目录
    themeConfig: { //主题配置
        nav: [
            { text: '主页', link: '/' },
            { text: '博客', link: 'https://lotosv2010.github.io/' },
            { text: 'github', link: 'https://github.com/lotosv2010/g-ui-next' },
        ],
        // 为以下路由添加侧边栏
        sidebar: [
            {
                text: 'Basic', // 必要的
                link: '/basic/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [{
                    text: 'Icon',
                    link: '/basic/icon/'
                }, {
                    text: 'Button',
                    link: '/basic/button/'
                }, {
                    text: 'ButtonGroup',
                    link: '/basic/button-group/'
                }]
            },
            {
                text: 'Form', // 必要的
                link: '/form/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
            },
        ]
    }
}