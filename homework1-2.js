require('./homework1-2-lib.js')


const main = () => {
	console.log("Enter a word:")
	let stdin = process.openStdin()	
	stdin.addListener("data", (value) =>{
	input = value.toString().trim()
	if(f(input))
	{
		console.log("this word is an isogram")
	}
	else
	{
		console.log("this word is not an isogram")
	}
	stdin.destroy()
	})
}

main()