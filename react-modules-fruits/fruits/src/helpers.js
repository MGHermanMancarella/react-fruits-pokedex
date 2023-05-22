/**choice(items): returns a randomly selected item from array of items */
function choice (items) {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

/**remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined. */
function remove (items, item) {
  const idx = items.indexOf(item)
  if (idx === -1) {
    return undefined
  } else {
    items.splice(idx, 1)
    return item
  }
}

export { choice, remove }
