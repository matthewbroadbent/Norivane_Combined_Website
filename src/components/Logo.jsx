import React from 'react'

const Logo = ({ currentPath = '/', variant = 'default' }) => {
  const getSuffix = () => {
    if (currentPath === '/ai') return 'ai'
    if (currentPath === '/exit') return 'exit'
    return ''
  }

  const suffix = getSuffix()

  const getColors = () => {
    if (variant === 'white') {
      return {
        nor: 'text-white',
        i: 'text-teal',
        vane: 'text-white',
        suffixFirst: 'text-white',
        suffixSecond: 'text-teal',
        suffixRest: 'text-white'
      }
    }
    
    return {
      nor: 'text-dark-blue',
      i: 'text-teal',
      vane: 'text-dark-blue',
      suffixFirst: 'text-dark-blue',
      suffixSecond: 'text-teal',
      suffixRest: 'text-dark-blue'
    }
  }

  const colors = getColors()

  return (
    <div className="flex items-center text-xl font-montserrat tracking-tight">
      <span className={`${colors.nor} font-semibold`}>nor</span>
      <span className={`${colors.i} font-medium italic`}>i</span>
      <span className={`${colors.vane} font-semibold`}>vane</span>
      {suffix && (
        <span className="text-sm ml-1">
          <span className={colors.suffixFirst}>{suffix.charAt(0)}</span>
          {suffix.length > 1 && (
            <span className={`${colors.suffixSecond} italic`}>{suffix.charAt(1)}</span>
          )}
          {suffix.length > 2 && (
            <span className={colors.suffixRest}>{suffix.slice(2)}</span>
          )}
        </span>
      )}
    </div>
  )
}

export default Logo
