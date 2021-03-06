import React, { useCallback, useEffect, useRef } from 'react'
import classNames from 'classnames'
import VanillaTilt from 'vanilla-tilt'
import './Tilt.scss'

function Tilt(props) {
  const { options, className, children, ...rest } = props
  const tilt = useRef(null)
  const titlClassNames = classNames('tilt', className)

  const initVanillaTilt = useCallback(() => {
    const innerWidth = window.innerWidth
    if (innerWidth > 768) {
      VanillaTilt.init(tilt.current, options)
    }
  }, [options])

  useEffect(() => {
    initVanillaTilt()
  }, [initVanillaTilt])

  // return <div ref={tilt} {...rest} className={titlClassNames} />
  return (
    <div ref={tilt} {...rest} className={titlClassNames}>
      <div className='tilt-children'>
        {children}
      </div>
    </div>
  )
}

export default Tilt
