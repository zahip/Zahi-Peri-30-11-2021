export const isEnglishStr = (str) => {
  // const english = /^[a-zA-Z_0-9\u00C0-\u017F][a-zA-Z_0-9\u00C0-\u017F\s]*$/g
  const english = /^[A-Za-z0-9 ]*$/
  return english.test(str)
}
