import { Header } from "./components/Header"
import { Post } from "./Post"
import './global.css'

export function App() {
  return (
    <div>
      <Header />


      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis alias eaque modi harum nostrum, at similique inventore incidunt quia cumque beatae, odit sed quibusdam. Totam eum laudantium eveniet sed!" 
      />
      <Post 
        author="Gabriel Melo" 
        content="Um novo post muito legal" 
      />
    </div>
  )
}