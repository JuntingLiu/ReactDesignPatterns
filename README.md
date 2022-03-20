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
