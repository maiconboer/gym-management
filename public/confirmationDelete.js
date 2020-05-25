const formDelete = document.querySelector('#form-delete')
formDelete.addEventListener('submit', (event) => {
    const confirmation = confirm('Deseja mesmo deletar ?')

    if (!confirmation) {
        event.preventDefault()
    }
})