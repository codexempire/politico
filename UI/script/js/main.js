const alert = document.getElementById('accessDenied');
const user = [
		{candidate:"Princewill", votes: 0},
		{candidate:"Patience", votes: 0},
		{candidate:"Comperee", votes: 0},
		{candidate:"Faith", votes: 0},
		{candidate:"Matias", votes: 0}
];

function elections(user) { 

	

	for (i=0; i<user.length; i++) {
		let minus = user.length - i;
		console.log(minus);
		if (minus == 1) {
			document.getElementById("elections").innerHTML += '<input type="checkbox" id="{user[i].candidate}" value = "1" >' + user[i].candidate+'<br><button>Vote</button>';
			return false;
		};

		document.getElementById("elections").innerHTML += '<input type="checkbox" value = "1" >' + user[i].candidate+'<br>';
	}
	
}

class votes {
	constructor(users) {
		this.user = user;
	}
	getVote(){
		for (i=0; i<this.user.length; i++) {
			document.getElementById(this.user[i].candidate);
			this.user[i].votes++
			console.log('thanks for Voting for'+this.user[i].candidate);
		};
	}
}

let voters = new votes;
votes.getVote;


elections(user);