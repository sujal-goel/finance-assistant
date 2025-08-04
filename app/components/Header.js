'use client'

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">
          <span className="gradient-text">Zenith</span>
        </h1>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#opportunity"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            The Opportunity
          </a>
          <a
            href="#solution"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Our Solution
          </a>
          <a
            href="#demo"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Demo
          </a>
          <a
            href="#blueprint"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            Blueprint
          </a>
        </nav>
        <a
          href="#"
          className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-sm"
        >
          Get In Touch
        </a>
      </div>
    </header>
  )
}
