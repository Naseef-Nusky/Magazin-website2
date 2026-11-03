import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-svh flex flex-col items-center justify-center gap-6 bg-slate-50 text-slate-800">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
        Magazin
      </h1>
      <p className="text-slate-600">
        React + Vite + Tailwind is ready. Edit{' '}
        <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm">
          src/App.tsx
        </code>
      </p>
      <button
        type="button"
        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </main>
  )
}

export default App
