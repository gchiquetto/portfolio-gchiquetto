import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { About } from './Pages/About'
import { Resume } from './Pages/Resume'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/" element={<Resume />} />
        <Route path="/" element={<Portfolio />} />
        <Route path="/" element={<Contact />} /> */}
      </Route>
    </Routes>
  )
}
