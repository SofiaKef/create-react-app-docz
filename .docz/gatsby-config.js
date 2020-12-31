const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Create React App Docz',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'F:\\create-react-app-docz\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Create React App Docz',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'F:\\create-react-app-docz',
          templates:
            'F:\\create-react-app-docz\\node_modules\\docz-core\\dist\\templates',
          docz: 'F:\\create-react-app-docz\\.docz',
          cache: 'F:\\create-react-app-docz\\.docz\\.cache',
          app: 'F:\\create-react-app-docz\\.docz\\app',
          appPackageJson: 'F:\\create-react-app-docz\\package.json',
          appTsConfig: 'F:\\create-react-app-docz\\tsconfig.json',
          gatsbyConfig: 'F:\\create-react-app-docz\\gatsby-config.js',
          gatsbyBrowser: 'F:\\create-react-app-docz\\gatsby-browser.js',
          gatsbyNode: 'F:\\create-react-app-docz\\gatsby-node.js',
          gatsbySSR: 'F:\\create-react-app-docz\\gatsby-ssr.js',
          importsJs: 'F:\\create-react-app-docz\\.docz\\app\\imports.js',
          rootJs: 'F:\\create-react-app-docz\\.docz\\app\\root.jsx',
          indexJs: 'F:\\create-react-app-docz\\.docz\\app\\index.jsx',
          indexHtml: 'F:\\create-react-app-docz\\.docz\\app\\index.html',
          db: 'F:\\create-react-app-docz\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
