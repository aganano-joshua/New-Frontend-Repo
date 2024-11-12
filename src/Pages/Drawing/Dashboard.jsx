import React from 'react'

const Dashboard = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://autodraw-atti.vercel.app/"
        title="External Site"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        allowFullScreen
      />
    </div>
  )
}

export default Dashboard