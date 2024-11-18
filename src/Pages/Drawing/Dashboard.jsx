import React from 'react'

const Dashboard = () => {
  const email = localStorage.getItem("email");
  const iframeSrc = `https://autodraw-atti.vercel.app/?email=${encodeURIComponent(email)}`;
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src={iframeSrc}
        title="External Site"
        id="iframe-id"
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