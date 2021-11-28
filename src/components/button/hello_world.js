import './hello_world.css'
import './hello_world.scss'

class HelloWorld{
    render() {
        console.log('created button');
       const button=document.createElement('button')
       button.innerHTML='hello World' 
        const body = document.getElementById('parent')
       body.appendChild(button)
       button.onclick=function(){
           const p = document.createElement('p')
           p.innerHTML = 'hello World'
           p.classList.add('text-primary','text-capitalize','bg-dark','m-3','p-2')
           const body = document.getElementById('parent')
           body.appendChild(p)  
       }
       button.classList.add('btn','p-3','text-light','bg-danger','m-3')
    }
}
export default HelloWorld;