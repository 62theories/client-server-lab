require('./homework1-1-lib.js')


const main = () => {
	console.log("Enter a binary number:")
	let stdin = process.openStdin()	
	stdin.addListener("data", (value) =>{
	input = value.toString().trim()
	console.log("This number in decimal is " + f(input))
	stdin.destroy()
	})
}

main()