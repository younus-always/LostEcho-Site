import React from 'react'
import { useEffect } from 'react'

const useTitle = (title) => {
      useEffect(() => {
            document.title = `${title} | LostEcho`;
      }, [title])
}

export default useTitle