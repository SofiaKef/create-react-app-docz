const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("F:\\create-react-app-docz\\.docz\\.cache\\dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("F:\\create-react-app-docz\\README.md"))),
  "component---src-components-todo-container-todo-container-mdx": hot(preferDefault(require("F:\\create-react-app-docz\\src\\components\\TodoContainer\\TodoContainer.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("F:\\create-react-app-docz\\.docz\\src\\pages\\404.js")))
}

