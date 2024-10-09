import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react'
import { useUser } from '../contexts/UserContext'

const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} before:content-[''] z-10`}
      style={{ ...style, display: "block", left: "10px" }}
      onClick={onClick}
    >
      <ChevronLeft size={24} className="text-primary" />
    </div>
  )
}

const NextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} before:content-[''] z-10`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    >
      <ChevronRight size={24} className="text-primary" />
    </div>
  )
}

const VideoSection = ({ title, videos }) => {
  const { user } = useUser()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id} className="px-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
              {video.premiumOnly && (!user || user.membershipType !== 'premium') && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Lock className="text-white" size={24} />
                </div>
              )}
              {video.sponsored && (
                <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                  スポンサード
                </div>
              )}
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">{video.title}</h4>
                <button className="text-primary hover:text-primary-light">
                  {video.premiumOnly && (!user || user.membershipType !== 'premium')
                    ? '有料会員限定'
                    : '視聴する'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

const FeaturedVideos = ({ searchTerm }) => {
  const newContent = [
    { id: 1, title: "最新の糖尿病治療法", thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
    { id: 2, title: "心臓病予防の新しいアプローチ", thumbnail: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", premiumOnly: true },
    { id: 3, title: "ストレス管理テクニック", thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", sponsored: true },
    { id: 4, title: "健康的な食事プランニング", thumbnail: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
    { id: 5, title: "効果的な運動ルーティン", thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", premiumOnly: true },
  ]

  const medicalTreatment = [
    { id: 6, title: "がん治療の最新技術", thumbnail: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", premiumOnly: true },
    { id: 7, title: "脳卒中後のリハビリテーション", thumbnail: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
    { id: 8, title: "慢性痛の新しい治療法", thumbnail: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", sponsored: true },
    { id: 9, title: "アレルギー治療の進歩", thumbnail: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
    { id: 10, title: "最新の整形外科手術", thumbnail: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", premiumOnly: true },
  ]

  const healthWellness = [
    { id: 11, title: "瞑想の健康効果", thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
    { id: 12, title: "ヨガで改善する柔軟性", thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", sponsored: true },
    { id: 13, title: "健康的な睡眠習慣", thumbnail: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", premiumOnly: true },
    { id: 14, title: "ワークライフバランスの重要性", thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
    { id: 15, title: "自然療法の基礎", thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
  ]

  const allVideos = [...newContent, ...medicalTreatment, ...healthWellness]

  const filteredVideos = allVideos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-16 bg-background-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">注目の動画</h2>
        {searchTerm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                {video.premiumOnly && (
                  <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    プレミアム
                  </div>
                )}
                {video.sponsored && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    スポンサード
                  </div>
                )}
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{video.title}</h4>
                  <button className="text-primary hover:text-primary-light">視聴する</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <VideoSection title="新着コンテンツ" videos={newContent} />
            <VideoSection title="医療・治療" videos={medicalTreatment} />
            <VideoSection title="健康・ウェルネス" videos={healthWellness} />
          </>
        )}
      </div>
    </section>
  )
}

export default FeaturedVideos