import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row w-full py-8 items-center justify-between text-[14px] text-gray-700 dark:text-gray-500'>
        <p>todos os direitos reservados ARRUMAR</p>
        <dir className="flex gap-5">
            <Link to='/contact'>Contato</Link>
            <Link to='/about'>Sobre</Link>
        </dir>
    </div>
  )
}

export default Footer