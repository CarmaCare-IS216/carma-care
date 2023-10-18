export const convertConstantsToDropdownOptions = (constants) => {
  const options = Object.keys(constants).map((key) => {
    // if (key === 'None') return null
    return { label: key, value: constants[key] }
  })

  return options
}
