import React from 'react';
import './App.css';
const marked = require('marked');

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      markdown: placeholder,
    }
  }
  

  updateMD = (event) => {
    this.setState({
      markdown: event.target.value
    })
  }

  render() {
    return (
      <div id='container'>
        
          <textarea id='editor' 
            type='text' value={this.state.markdown} onChange={this.updateMD} rows="4" ></textarea> 
              
        
        
          <div id='preview' 
            dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}>
          
        </div>
      </div>
    );
  }
}

const placeholder = `
# Bienvenidxs a mi Previewer de Markdown!

  ## Esto es un subheading...
  ### Y acá hay un par de cosas interesantes:
  
  Un poco de código, \`<code></code>\`, entre 2 backticks.
  
  \`\`\`
  // esto es código multilinea y la razon 
  por la cual el texto se actualiza debajo (!!!):
  
  updateMD = (event) => {
    this.setState({
      markdown: event.target.value
    })
  }

  \`\`\`
  
  También podés escribir texto **bold**... o _italico_.
  O tambien... **_ambos!_**
  Y obvio, también tachar algunos errores ~~algunos errorsd~~.
  
  Tambien hay [links](https://github.com/juancdominici) _(publicidad sin vergüenza)_, y
  > citas de bloque!
  >> citas de bloque nesteadas!

  Y, si por algúna razón elegís este medio para hacerlo, también hay tablas:
  
  h1 | h2 | h3?
  ------------ | ------------- | -------------
  Tu contenido puede | ir por acá y | también por acá....
  Y acá. | Y... | Bueno, se entiende.
  

  - Obvio también hay listas.
    - Algunas son bulleted.
       - Con diferentes niveles de indentación.
          - Que se ven algo así.
  
  
  1. Y también hay listas numeradas.
  1. Podés usar solo 1s si querés!
  1. Y, último pero no menos importante, imágenes!:
  
  ![sample img](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Ftoddler-doodle-happy-birthday%2F584%2FLJ_VECTOR-42-512.png&f=1&nofb=1)`;  