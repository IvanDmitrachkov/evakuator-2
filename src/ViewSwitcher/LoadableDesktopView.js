import React from 'react'
// packages
import universal from 'react-universal-component'

const Loading = ({ error, retry: handleRetry }) => {
  if (error) {
    return (
      <div>
        Error! {error}
        <button onClick={handleRetry}
          type={'button'}
        >
          Retry
        </button>
      </div>
    )
  } else {
    return (
      <div
        style={{
          position: 'relative'
        }}
      />
    )
  }
}

const LoadableApp = universal(import('../App/AppDesktop'), { loading: Loading })

export default LoadableApp
