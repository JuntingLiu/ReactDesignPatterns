# React: Design Patterns

## Layout Component

布局组件，只关心布局，其他业务上的逻辑该不涉及。

* SplitScreen
* Lists、ListItem
* Modal

涉及到的分支：

* 01-layout-component

## Container Component

容器组件, 负责所有数据加载，再将数据分发到各个子组件。子组件不需要关心数据来自哪里或如何管理它，保持组件的纯粹。

```shell
npx nodemon --exec npx babel-node server.js
```

* CurrentLoader
* UserLoader
* ResourceLoader
* DataSource => 数据加载容器，请求函数由外部传递，展示内容组件也由外部传递，只负责数据的加载。

## Controlled vs Uncontrolled Components

受控组件与非受控组件。

## Higher-Order Components (HOCs)

高阶组件是返回另一个组件的组件。

```js
MyComponent ----> <h1>I'm JSX!</h1>

HOC ----> SomeComponent ----> <h1>I'm JSX!</h1>
```

高阶组件就是一个函数，被视为某种组件工厂函数，调用这些函数来创建新组件。使用高阶组件就是为了可以在几个组件之间共享行为。

## Custom Hooks


## Functional Programming (FP)

函数式编程。

在 React 中函数式编程的一些最常见的应用：

* Controlled components
* Function components
* Higher-order components
* Recursive components （递归组件）
* Partially applied components (部分应用组件, 偏函数组件)
* Component composition (组合组件)