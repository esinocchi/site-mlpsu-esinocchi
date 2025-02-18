'use client'

import { useTheme } from '@/providers/ThemeProvider'
import { FaSun, FaMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 p-3 rounded-full shadow-lg transition-colors z-50
        dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700
        bg-white text-gray-800 hover:bg-gray-100"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
    </motion.button>
  )
} 