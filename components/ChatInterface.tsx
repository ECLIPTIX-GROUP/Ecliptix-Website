import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Terminal, Activity, RefreshCw } from 'lucide-react';
import { generateEcliptixResponse } from '../services/geminiService';
import { Message, LoadingState } from '../types';

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Initialisation du Core Ecliptix... \nLiaison satellite établie. En attente de commande.",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || status === LoadingState.LOADING) return;

    const userMessage: Message = {
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setStatus(LoadingState.LOADING);

    try {
      const responseText = await generateEcliptixResponse(userMessage.text);
      
      const botMessage: Message = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto relative group">
      
      {/* Holographic Projection Base Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-ecliptix-orange via-blue-500 to-ecliptix-orange opacity-20 blur transition duration-1000 group-hover:opacity-40 animate-pulse-slow rounded-xl"></div>
      
      <div className="relative w-full h-[700px] bg-slate-950/90 backdrop-blur-xl rounded-xl overflow-hidden flex flex-col border border-slate-700/50 shadow-2xl">
        
        {/* CRT Scanline Overlay */}
        <div className="absolute inset-0 scanline z-50 pointer-events-none opacity-10"></div>

        {/* HUD Corners */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-ecliptix-orange/60 rounded-tl z-20"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-ecliptix-orange/60 rounded-tr z-20"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-ecliptix-orange/60 rounded-bl z-20"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-ecliptix-orange/60 rounded-br z-20"></div>

        {/* Header HUD */}
        <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                <Bot size={20} className="text-ecliptix-orange" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
            </div>
            <div>
              <span className="font-mono font-bold text-white tracking-wider block">ECLIPTIX CORE</span>
              <span className="text-[10px] text-ecliptix-orange/70 font-mono uppercase tracking-widest flex items-center gap-1">
                 <Activity size={10} /> v3.4.1 Stable
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px] text-slate-500 hidden sm:flex">
            <div className="flex flex-col items-end">
              <span>NET_SPEED</span>
              <span className="text-white">12.4 TB/s</span>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div className="flex flex-col items-end">
              <span>ENCRYPTION</span>
              <span className="text-green-400">AES-4096</span>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide font-mono text-sm relative z-10">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''} animate-[float_0.5s_ease-out]`}
            >
              {msg.role === 'model' && (
                <div className="w-8 h-8 rounded bg-ecliptix-orange/20 border border-ecliptix-orange/40 flex items-center justify-center flex-shrink-0 mt-1">
                   <Terminal size={14} className="text-ecliptix-orange" />
                </div>
              )}
              
              <div className={`p-5 max-w-[85%] rounded-2xl relative overflow-hidden ${
                msg.role === 'user' 
                  ? 'bg-slate-800 text-white rounded-tr-none border border-slate-700' 
                  : 'bg-slate-900/80 text-slate-200 rounded-tl-none border border-ecliptix-orange/10 shadow-[0_0_15px_rgba(251,146,60,0.05)]'
              }`}>
                {/* Tech Deco on Message */}
                {msg.role === 'model' && <div className="absolute top-0 left-0 w-1 h-full bg-ecliptix-orange/50"></div>}
                
                <p className="whitespace-pre-wrap leading-relaxed relative z-10">{msg.text}</p>
                
                <div className="flex items-center justify-end gap-2 mt-2 opacity-30 text-[10px] font-mono">
                  <span>{msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                  {msg.role === 'model' && <RefreshCw size={10} />}
                </div>
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded bg-slate-700 border border-slate-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <User size={14} className="text-slate-300" />
                </div>
              )}
            </div>
          ))}
          
          {status === LoadingState.LOADING && (
            <div className="flex items-center gap-3 pl-12">
               <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 bg-ecliptix-orange rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                 <div className="w-1.5 h-1.5 bg-ecliptix-orange rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                 <div className="w-1.5 h-1.5 bg-ecliptix-orange rounded-full animate-bounce"></div>
               </div>
               <span className="text-xs text-ecliptix-orange font-mono animate-pulse">COMPUTING...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-900/80 border-t border-slate-800 relative z-10">
          <form onSubmit={handleSendMessage} className="relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Entrez les coordonnées de la mission..."
              className="w-full bg-slate-950 text-white font-mono pl-6 pr-16 py-4 rounded-lg border border-slate-700 focus:border-ecliptix-orange focus:ring-1 focus:ring-ecliptix-orange outline-none transition-all placeholder:text-slate-600 shadow-inner"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim() || status === LoadingState.LOADING}
              className="absolute right-2 p-2.5 bg-ecliptix-orange hover:bg-orange-500 text-white rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[10px] text-slate-600 font-mono">SECURE CONNECTION // PORT 443 // ENCRYPTED</span>
          </div>
        </div>
      </div>
    </div>
  );
};