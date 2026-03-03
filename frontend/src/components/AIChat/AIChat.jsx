import React, { useState } from 'react'
import './AIChat.css'
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa'

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! 👋 I\'m your AI Course Coach. I can help you find the perfect course based on your skills and goals. How can I assist you today?' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = { type: 'user', text: inputValue }
    setMessages([...messages, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        'That\'s great! I\'d love to help you find the right course. Can you tell me about your experience level?',
        'Interesting! We have several courses that match your interests. Would you like to hear about our Frontend, Backend, or Full Stack paths?',
        'Perfect! Based on what you mentioned, I recommend checking out our Pro or Plus plans for the best learning experience.',
        'You can get started with our Free plan to explore courses, or upgrade to Pro/Plus for unlimited access and downloadable resources.',
        'Don\'t hesitate to ask anything else about our courses, pricing, or learning paths!'
      ]
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      const botMessage = { type: 'bot', text: randomResponse }
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className='ai-chat-container'>
      {/* Floating Button */}
      <button 
        className='ai-chat-button'
        onClick={() => setIsOpen(!isOpen)}
        title='AI Chat Assistant'
      >
        <FaRobot />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className='ai-chat-window'>
          {/* Header */}
          <div className='chat-header'>
            <div className='chat-title'>
              <FaRobot className='header-icon' />
              <span>Codox AI</span>
            </div>
            <button className='close-btn' onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className='chat-messages'>
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className='message-content'>
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className='message bot'>
                <div className='message-content typing'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className='chat-input-container'>
            <input
              type='text'
              className='chat-input'
              placeholder='Ask me anything about courses...'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className='send-btn' 
              onClick={handleSendMessage}
              disabled={isLoading}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AIChat
