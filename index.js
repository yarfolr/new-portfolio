let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.nav__list')
let menuItem = document.querySelectorAll('.nav__link')

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active')
	menu.classList.toggle('active')
})

menuItem.forEach(function (menuItem) {
	menuItem.addEventListener('click', function () {
		menuBtn.classList.toggle('active')
		menu.classList.toggle('active')
	})
})
console.log(123)
	const platform = navigator.userAgent;
	const device = navigator.userAgentData.platform;
	var getLatitude 
	var getLongitut
	const geolocation = navigator.geolocation.getCurrentPosition(
		(postion) =>{
			const{latitude, longitut}=position.coords
			console.log(latitude,longitut)
			getLatitude=latitude
			getLongitut=longitut
		}
	);
	alert(getLatitude,getLongitut)
	const form = document.querySelector('form')

form.addEventListener('submit', event => {
	// event.preventDefault()

	const name = form.elements.name.value
	const phone = form.elements.phone.value
	const message = form.elements.message.value


	const messageMail = `
	Name: ${name}
	Phone: ${phone}
	Message: ${message || '🪿🪿🪿🪿.'}
	Device: ${device || '🪿🪿🪿🪿🪿'}
	Platform: ${platform || '🪿🪿🪿🪿🪿'}
	Geolocation: ${getLatitude,getLongitut  || '🪿🪿🪿🪿🪿'}
	`
	console.log(messageMail)

	const TOKEN = '6690363654:AAFYyoWA1lhCba_HnCa0beZOrzkDnQW2c2I'
	const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

	const ID = '-1001969474610'

	axios
		.post(URI_API, {
			chat_id: ID,
			parse_mod: 'html',
			text: messageMail,
		})
		.then(res => {
			console.log(res);
		})
		.catch((error) =>{
			console.log(error)
		})
})
console.log(navigator)