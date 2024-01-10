import React from 'react'


import { Button, CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'

export default function Contact(props) {


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Liên hệ</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Họ và tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border rounded-md p-2"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border rounded-md p-2"
                placeholder="Nhập địa chỉ email của bạn"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Nội dung
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border rounded-md p-2 resize-none"
                placeholder="Nhập nội dung tin nhắn của bạn"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Gửi
            </button>
          </form>
        </div>
      </div>
    )
}
