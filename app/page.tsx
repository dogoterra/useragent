'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, Smartphone, Tablet, Sparkles } from 'lucide-react'

export default function Home() {
  const [userAgent, setUserAgent] = useState<string>('')
  const [deviceType, setDeviceType] = useState<string>('')

  useEffect(() => {
    setUserAgent(window.navigator.userAgent)
    
    if (/Mobi|Android/i.test(window.navigator.userAgent)) {
      setDeviceType('Mobile')
    } else if (/Tablet|iPad/i.test(window.navigator.userAgent)) {
      setDeviceType('Tablet')
    } else {
      setDeviceType('Desktop')
    }
  }, [])

  const getDeviceIcon = () => {
    switch(deviceType) {
      case 'Mobile':
        return <Smartphone className="h-12 w-12 text-pink-200" />
      case 'Tablet':
        return <Tablet className="h-12 w-12 text-pink-200" />
      default:
        return <Laptop className="h-12 w-12 text-pink-200" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-1 bg-pink-200 shadow-[0_0_15px_#ffd1dc]"></div>
      <Card className="w-full max-w-2xl bg-gray-800 border-pink-200 shadow-[0_0_25px_rgba(255,209,220,0.3)]">
        <CardHeader className="text-center border-b border-pink-200/20 pb-6">
          <CardTitle className="text-3xl font-bold text-pink-200 flex items-center justify-center">
            <Sparkles className="mr-2 h-8 w-8" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-pink-100">Your User Agent</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-6">
            {getDeviceIcon()}
            <Badge variant="secondary" className="text-lg px-4 py-1 bg-pink-200/20 text-pink-100 hover:bg-pink-200/30 shadow-[0_0_10px_rgba(255,209,220,0.3)]">
              {deviceType}
            </Badge>
            <div className="w-full px-4 py-3 bg-gray-900 rounded-md shadow-inner">
              <p className="text-center text-sm text-pink-200 font-mono break-all">
                {userAgent}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-200 shadow-[0_0_15px_#ffd1dc]"></div>
    </div>
  )
}