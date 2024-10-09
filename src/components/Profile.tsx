import React from 'react'
import { useUser } from '../contexts/UserContext'

const Profile = () => {
  const { user } = useUser()

  if (!user) {
    return <div>ログインしてください</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">プロフィール</h2>
      <div className="bg-white shadow-md rounded p-6">
        <p><strong>名前:</strong> {user.name}</p>
        <p><strong>メールアドレス:</strong> {user.email}</p>
        <p><strong>会員タイプ:</strong> {user.membershipType === 'premium' ? '有料会員' : '無料会員'}</p>
        {user.membershipType === 'free' && (
          <button className="mt-4 bg-primary text-white p-2 rounded hover:bg-primary-light">
            有料会員にアップグレード
          </button>
        )}
      </div>
    </div>
  )
}

export default Profile