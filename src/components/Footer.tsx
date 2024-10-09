import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">MediWell</h3>
            <p className="text-sm">最新の医療情報と健康知識をお届けする映像メディア</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">リンク</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent-light">ホーム</a></li>
              <li><a href="#" className="hover:text-accent-light">医療・治療</a></li>
              <li><a href="#" className="hover:text-accent-light">健康・ウェルネス</a></li>
              <li><a href="#" className="hover:text-accent-light">お問い合わせ</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">フォローする</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-light">Twitter</a>
              <a href="#" className="hover:text-accent-light">Facebook</a>
              <a href="#" className="hover:text-accent-light">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 MediWell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer