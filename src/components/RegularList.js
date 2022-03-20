import React from 'react'

export default function RegularList({
  items,
  resourceName,
  itemComponent: ItemComponent
}) {
  return (
    <>
      {
        items.map((item, i) => {
          return (
            <ItemComponent key={i} {...{ [resourceName]: item }} />
          )
        })
      }
    </>
  )
}
