const images = ['../assets/bg-login-1.png', '../assets/bg-login-2.png', '../assets/bg-login-3.jpg']
var indexSlide = 0
var time = 3000

const usuario = {
    email: 'luiz@gmail.com',
    senha: '1234'
}

document.getElementById('icon-password').addEventListener('click', () => {
    const icon = document.getElementById('icon-password')
    const inputSenha = document.getElementById('senha')

    if (icon.classList.contains('fa-eye-slash')) {
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
        inputSenha.type = 'password'
    } else {
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
        inputSenha.type = 'text'
    }
})

const validar = (event) => {
    event.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (email == '' || email == undefined || email == null) {
        alert('Email vázio,confira o email!!')
    } else if (senha == '' || senha == undefined || senha == null) {
        alert('Senha vázia,confira a senha!!')
    } else {
        if (usuario.email == email && usuario.senha == senha) {
            Swal.fire({
                title: "O que deseja fazer ?",
                color: '#1a1a1a',
                icon: "success",
                iconColor: '#0054ff',
                showDenyButton: true,
                confirmButtonColor: "#00005a",
                denyButtonColor: "#00005a",
                confirmButtonText: "Ir para o dashboard",
                denyButtonText: 'Jogar Quiz'
            }).then((result) => {
                if (result.isConfirmed) {
                    alert('fuii')
                } else if (result.isDenied) {
                    window.location.href = './quiz.html'
                } else {
                    alert('Escolha uma opção para seguir após o login!')
                }
            })
        } else {
            alert('Usuário ou senha inválidos')
        }
    }
}

const slideShow = () => {
    const imageBanner = document.getElementById('imageBanner');
    imageBanner.style.opacity = '0';

    setTimeout(() => {
        imageBanner.style.transition = 'opacity 1s';
        imageBanner.style.opacity = '1';
        imageBanner.src = images[indexSlide];
    }, 350);

    indexSlide++;

    if (indexSlide == images.length) {
        indexSlide = 0;
    }

    setTimeout(slideShow, time);
}
slideShow()