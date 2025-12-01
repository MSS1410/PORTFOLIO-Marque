// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomeView } from './views/Home/HomeView'
import { InfoView } from './views/Info/InfoView'
import { ProjectsView } from './views/Projects/ProjectsView'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/info' element={<InfoView />} />
        <Route path='/projects' element={<ProjectsView />} />
      </Routes>
    </Layout>
  )
}

export default App
