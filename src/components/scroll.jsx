export const toTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

export const toElement = (element) => {
  element.scrollIntoView({
    behavior: 'smooth'
  })
}

export default { toTop, toElement }
