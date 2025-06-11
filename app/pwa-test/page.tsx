import React from 'react';

export default function PWATestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">PWA Test Page</h1>
      
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold">PWA Status</h2>
        
        <div className="space-y-2">
          <p>This page is used to test if your Progressive Web App (PWA) is working correctly.</p>
          <p>If you&apos;ve loaded this page at least once while online, it should be available even when you&apos;re offline!</p>
        </div>
        
        <div className="border-t pt-4">
          <h3 className="font-medium mb-2">Test Your PWA:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Open Chrome DevTools (F12)</li>
            <li>Go to Application tab</li>
            <li>Check if Service Worker is registered</li>
            <li>Turn on "Offline" in the Network tab</li>
            <li>Refresh the page - it should still load!</li>
          </ol>
        </div>
        
        <div className="border-t pt-4 mt-4">
          <p className="text-sm text-gray-600">Current Time: <span id="current-time">{new Date().toLocaleString()}</span></p>
          <p className="text-sm text-gray-600">Page served via: <span id="connection-status">online</span></p>
          <script dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('current-time').textContent = new Date().toLocaleString();
              document.getElementById('connection-status').textContent = navigator.onLine ? 'online' : 'offline';
            `
          }} />
        </div>
      </div>
    </div>
  );
}
