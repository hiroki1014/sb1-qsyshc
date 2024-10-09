import React from 'react'
import { Play } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">最新の医療と健康情報をお届け</h1>
          <p className="text-xl mb-8">信頼できる専門家による動画と記事で、あなたの健康をサポートします</p>
          <button className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-6 rounded-full flex items-center mx-auto">
            <Play size={20} className="mr-2" />
            最新動画を見る
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero