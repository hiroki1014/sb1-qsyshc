import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [membershipType, setMembershipType] = useState('free')
  const { setUser } = useUser()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで実際の登録処理を行う
    setUser({
      id: '1',
      name: name,
      email: email,
      membershipType: membershipType as 'free' | 'premium'
    })
    navigate('/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">会員登録</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">名前</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">メールアドレス</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">パスワード</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">会員タイプ</label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                value="free"
                checked={membershipType === 'free'}
                onChange={() => setMembershipType('free')}
                className="mr-2"
              />
              無料会員
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="premium"
                checked={membershipType === 'premium'}
                onChange={() => setMembershipType('premium')}
                className="mr-2"
              />
              有料会員
            </label>
          </div>
        </div>
        <button type="submit" className="w-full bg-primary text-white p-2 rounded hover:bg-primary-light">
          登録
        </button>
      </form>
    </div>
  )
}

export default Register