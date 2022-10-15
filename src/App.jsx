import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
          author="Diego Fernandes" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis alias eaque modi harum nostrum, at similique inventore incidunt quia cumque beatae, odit sed quibusdam. Totam eum laudantium eveniet sed!" 
          />
          <Post 
            author="Gabriel Melo" 
            content="Um novo post muito legal" 
          />
        </main>
      </div>
    </div>
  )
}