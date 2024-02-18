export const userData = () => {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setUserName(user.name)
    }
  }, [])

  return {userName}
}