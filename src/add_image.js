import myimage from './steak.jpg'
function add_img(){
    const img = document.createElement('img')
    img.src=myimage
    const body = document.getElementById('parent')
   body.appendChild(img)
}

export default  add_img