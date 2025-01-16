import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-3/4">
      <nav className="container mx-auto px- py-3">
        <div className="flex items-center w-full justify-center-custom">
          <div className="flex space-x-4 justify-end w-1/4">
            <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-800">Skills</a>
          </div>
          <a href="#" className="text-4xl font-bold text-gray-800 px-4">Andrew Choi</a>
          <div className="flex space-x-4 justify-start w-1/4">
            <a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
