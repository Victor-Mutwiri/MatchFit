import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
        <i className="bi bi-exclamation-triangle-fill error-icon"/>
        <h1 className='error-message'>404 - Page Not Found</h1>
        <p>Haha!!!The page you are looking for does not exist.</p>
        <span>click to head back <a href="/">home</a></span>
    </div>
  )
}

export default NotFound