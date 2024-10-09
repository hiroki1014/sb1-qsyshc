import React from 'react'

const LatestArticles = ({ searchTerm }) => {
  const articles = [
    { id: 1, title: "睡眠の質を向上させる7つの方法", excerpt: "良質な睡眠は健康の基礎です。専門家が推奨する睡眠改善のテクニックをご紹介します。", image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" },
    { id: 2, title: "メンタルヘルスケアの重要性", excerpt: "ストレス社会での心の健康維持について、最新の研究結果と実践的なアドバイスをお届けします。", image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" },
    { id: 3, title: "予防医学の最前線：健康診断の新しいアプローチ", excerpt: "最新のテクノロジーを活用した健康診断の進化と、その重要性について解説します。", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" },
  ]

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">最新の記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                <p className="text-text-light mb-4">{article.excerpt}</p>
                <button className="text-primary hover:text-primary-light">続きを読む</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestArticles