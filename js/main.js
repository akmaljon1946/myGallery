const gallery = document.querySelector('.gallery')
const modal = document.getElementById('modal')
const modalImg = document.getElementById('modal-img')

gallery.addEventListener('click', e => {
	if (e.target.tagName === 'IMG') {
		modal.style.display = 'flex'
		modalImg.src = e.target.src
	}
})

modal.addEventListener('click', () => {
	modal.style.display = 'none'
})
