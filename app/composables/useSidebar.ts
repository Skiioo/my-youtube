export const useSidebar = () => {
  const collapsed = ref(false)

  const toggle = () => {
    collapsed.value = !collapsed.value
  }

  const setCollapsed = (value: boolean) => {
    collapsed.value = value
  }

  return {
    collapsed: readonly(collapsed),
    toggle,
    setCollapsed
  }
}
