const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("F:\\create-react-app-docz\\.docz\\.cache\\dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("F:\\create-react-app-docz\\README.md"))),
  "component---src-components-header-header-mdx": hot(preferDefault(require("F:\\create-react-app-docz\\src\\components\\Header\\Header.mdx"))),
  "component---src-components-input-todo-input-todo-mdx": hot(preferDefault(require("F:\\create-react-app-docz\\src\\components\\InputTodo\\InputTodo.mdx"))),
  "component---src-components-todo-container-todo-container-mdx": hot(preferDefault(require("F:\\create-react-app-docz\\src\\components\\TodoContainer\\TodoContainer.mdx"))),
  "component---src-components-todo-item-todo-item-mdx": hot(preferDefault(require("F:\\create-react-app-docz\\src\\components\\TodoItem\\TodoItem.mdx"))),
  "component---src-components-todos-list-todos-list-mdx": hot(preferDefault(require("F:\\create-react-app-docz\\src\\components\\TodosList\\TodosList.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("F:\\create-react-app-docz\\.docz\\src\\pages\\404.js")))
}

