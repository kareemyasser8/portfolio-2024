import React from "react"
import { ImSpinner2 } from "react-icons/im"

const loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="loader">
        <ImSpinner2 color={`#504ee4`} size={40} />
      </div>
    </div>
  )
}

export default loading
