import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed left-1/4 right-1/4 z-50 px=12">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
            <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-800">Skills</a>
            <a href="#" className="text-2xl font-bold text-gray-800">Andrew Choi</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div>
      </nav>
    </header>
  )
}

export default Header
