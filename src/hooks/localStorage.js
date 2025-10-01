export const setToken = (token) => {
  localStorage.setItem('bitglobal', JSON.stringify(token))
}
export const fetchToken = () => {
  const token = localStorage.getItem('warrantIT')

  return token
}
