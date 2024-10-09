import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search } from 'lucide-react'
import { useUser } from '../contexts/UserContext'

const Header = ({ searchTerm, setSearchTerm }) => {
  const { user } = useUser();

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">MediWell</Link>
        <div className="flex-grow mx-4 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="動画や記事を検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-text hover:text-primary">ホーム</Link>
          <Link to="/" className="text-text hover:text-primary">医療・治療</Link>
          <Link to="/" className="text-text hover:text-primary">健康・ウェルネス</Link>
          {user ? (
            <>
              <Link to="/profile" className="text-text hover:text-primary">{user.name}</Link>
              <button className="text-text hover:text-primary">ログアウト</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-text hover:text-primary">ログイン</Link>
              <Link to="/register" className="text-text hover:text-primary">会員登録</Link>
            </>
          )}
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}

export default Header