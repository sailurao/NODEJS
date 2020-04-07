function Timedisplay(){
	let ts = Date.now();

	let date_ob = new Date(ts);

	// timestamp in milliseconds
	console.log(ts);

	// timestamp in seconds
	console.log(Math.floor(ts%1000));

     ms = Math.floor(ts%1000)

	// current date
	// adjust 0 before single digit date
	let date = ("0" + date_ob.getDate()).slice(-2);

	// current month
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

	// current year
	let year = date_ob.getFullYear();

	// current hours
	let hours = date_ob.getHours();

	// current minutes
	let minutes = date_ob.getMinutes();

	// current seconds
	let seconds = date_ob.getSeconds();

	// prints date in YYYY-MM-DD format
	console.log(year + "-" + month + "-" + date);

	// prints date & time in YYYY-MM-DD HH:MM:SS format
	console.log(date+ "/" + month + "/" + year + "/" +  hours + ":" + minutes + ":" + seconds + " " + ms);
}

setInterval(Timedisplay, 1000);