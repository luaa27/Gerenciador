'use strict'

const botao = document.getElementById('criar-conta')
const input = document.getElementById('foto-perfil')

botao.addEventListener('click', () => {
    
    const nome = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const passwordConfirmation = document.getElementById('password-confirmation')
   
    
    if(nome.value != '' && email.value != '' && password.value != '' && passwordConfirmation.value != ''){
        
        if(password.value == passwordConfirmation.value){
            
            localStorage.setItem('nome', nome.value)
            localStorage.setItem('email', email.value)
            localStorage.setItem('senha', password.value)
            
            
            if(!localStorage.getItem('imagem')){
                localStorage.setItem('imagem', '../img/icons/User.svg')
            }

            nome.value = ''
            email.value = ''
            password.value = ''
            passwordConfirmation.value = ''
            
            alert('Conta criada com sucesso')
            
        } else if (password != passwordConfirmation){
            alert('Informe senhas iguais')
        }
        
    }
  
})

input.addEventListener('change', () => {

    let file = input.files[0]
    
    if (file) {

        const reader = new FileReader();
    
        reader.addEventListener('load', (e) => {
            const readerTarget = e.target
            const imagem = document.getElementById('imagem-usuario')
            localStorage.setItem('imagem', readerTarget.result)
            imagem.style.backgroundImage = `url(${localStorage.getItem('imagem')})`
            imagem.removeChild(imagem.children[0])
        })
    
    reader.readAsDataURL(file);

    }

})