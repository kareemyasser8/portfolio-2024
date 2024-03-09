import React from 'react'

const Collapsible = () => {
  return (
    <div className='collapsible collapsible--expanded'>
        <header className='collapsible__header'>
            <h2 className='collapsible__heading'>Item 1</h2>
            <span>{`>`}</span>
        </header>
        <div className="collapsible__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque quam itaque consequatur, sequi numquam quisquam vero corrupti deserunt ea recusandae. Itaque aliquam cum mollitia, sit nisi inventore nostrum repellendus.
        </div>
    </div>
  )
}

export default Collapsible