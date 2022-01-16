import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

function useLoadingPage() {
  const history = useHistory()
  const timeDelay = history.action === 'PUSH' ? 0 : 1000
  // if you want to show the loader when React loads data again
  // const showLoader = () => loader.classList.remove('disable')
  // const hideLoader = () => loader.classList.add('disable')
  const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    // Loading Page
    const loader = document.querySelector('.loading-page')
    // Waiting for loading page at least 1s
    setTimeout(() => {
      loader.classList.add('disable')
      setLoadingPage(false)
    }, timeDelay)
  }, [])

  return loadingPage
}

export default useLoadingPage
