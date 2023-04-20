// // =========================================================================================
// // 		Auteur:					Thibaud Fossez, Mylan Coudeville
// // 		aanmaak Datum:			19/04/2023
// //		laatste update:			19/04/2023
// // 		Locatie:				Warmoesberg 26, 1000 Brussel
// //								Odisee campus Brussel, Her3 01.1402 
// // =========================================================================================


// /**
//  * Voorbeeld code:
//  * VERGEET ASYNC AWAIT NIET!
//  */
// async function main() {
// 	await hostUserVerification("{email@odisee.student.be}", "{password}"); // je email en wachtwoord van de dashboard website
// 	let returnArray = await getUserIdsFromEmails("{email.player.1@student.odisee.be}", "{email.player.2@student.odisee.be}");
// 	console.log("User 1: " + returnArray[0])
// 	console.log("User 2: " + returnArray[1])
// 	await createMatch(returnArray[1], "{}");
// 	await createScorePerPlayer({}, {De_behaalde_plaats}, {De_behaalde_score}, "{teamID}");
// 	await endGame(returnArray[0], "{teamID}");
// 	await createTeamRecentie({integerwaarde}, {speler_ID}, "{beschrijving van de recentie}", "{teamID}");
// 	await uploadWebsiteLink("{URL naar jullie website}", "{teamID}");
// }
// main();


/**
 * GLOBAL VARIABLES
 * niet aanpassen
 */
let verificationToken = "";
var IDs = new Array();
var scores = new Array();
let match = "";


/**
 * Host verification
 * @param {String} email Email van de gebruiker.
 * @param {String} password Wachtwoord van de gebruiker.
 */
export async function hostUserVerification(email, password) {
	var formdata = new FormData();
	formdata.append("identity", email);
	formdata.append("password", password);

	var requestOptions = {
		method: 'POST',
		body: formdata,
		redirect: 'follow'
	};

	await fetch("https://lucas-miserez.be/api/collections/person/auth-with-password", requestOptions)
		.then(response => response.json())
		.then(result => {
			verificationToken = result.token;
		})
		.catch(error => console.log('error', error));
}


/**
 * Get user IDs
 * Note: 1 van de emails moet geveriffieerd zijn op de website.
 * note2: Er kunnen meerdere emails meegegeven worden door de fetch uit te breiden.
 * @param {String} email1 Email adres van de eerste speler.
 * @param {String} email2 Email adres van de tweede speler.
 * @returns Array [UserId1, UserId2]
 */
async function getUserIdsFromEmails(email1, email2) {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};

	await fetch("https://lucas-miserez.be/api/collections/person/records?filter=(email='" + email1 + "'|| email='" + email2 + "')", requestOptions)
		.then(response => response.json())
		.then(result => {
			console.log(result);
			for (var i = 0; i < result.items.length; i++) {
				IDs[i] = result.items[i].id;
			}
		})
		.catch(error => console.log('error', error));
	return IDs;
}


/**
 * Maak een match aan met de speler IDs en match ID
 * @param {String} hostIDInput De ID van de host, de email van dit account moet geveriffieerd zijn op de dashboard website.
 * @param {String} teamIDInput De ID van het Team, Dit is te vinden op de dashboard website.
 */
async function createMatch(hostIDInput, teamIDInput) {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Authorization", "Bearer " + verificationToken);

	var raw = JSON.stringify({
		"spelers": [
			IDs[0],
			IDs[1]
		],
		"host": hostIDInput,
		"team": teamIDInput
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	await fetch("https://lucas-miserez.be/api/collections/match/records", requestOptions)
		.then(response => response.json())
		.then(result => {
			match = result.id;
		})
		.catch(error => console.log('error', error));
}


/**
 * Functie voor het aanmaken van een score.
 * @param {String} PlayerId De Id van de speler waar de score aan is verbonden.
 * @param {Integer} plaats De plaats die deze speler heeft berijkt. (1ste plaats, 2de plaats, ...)
 * @param {Integer} score De score die deze speler heeft gekregen. (die bepaal je zelf)
 * @param {String} teamID Het teamID van het spel.
 */
async function createScorePerPlayer(PlayerId, plaats, score, teamID) {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Authorization", "Bearer " + verificationToken);

	var raw = JSON.stringify({
		"player": PlayerId,
		"plaats": plaats,
		"score": score,
		"score_is_van_team": teamID
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	await fetch("https://lucas-miserez.be/api/collections/score/records", requestOptions)
		.then(response => response.json())
		.then(result => {
			scores.push(result.id);
		})
		.catch(error => console.log('error', error));
}


/**
 * De functie voor het einde van het spel.
 * @param {String} userIdVanWinnaar De User ID van de winnaar.
 * @param {String} teamID De ID van jullie team.
 */
async function endGame(userIdVanWinnaar, teamID) {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Authorization", "Bearer " + verificationToken);

	var raw = JSON.stringify({
		"scores": scores,
		"winnaar": userIdVanWinnaar,
		"d0n3": true // niet aanpassen.
	});

	var requestOptions = {
		method: 'PATCH',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	fetch("https://lucas-miserez.be/api/collections/match/records/" + match, requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
}


/**
 * Een persoon maakt een recentie van het spel.
 * @param {Integer} scoredStars Een score van 1 included tot 5 (1-5 sterren)
 * @param {String} persoonID Het ID van de persoon die de recentie schrijft.
 * @param {String} beschrijving De beschrijving can de recentie.
 * @param {String} teamID Jullie TeamID.
 */
async function createTeamRecentie(scoredStars, persoonID, beschrijving, teamID) {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Authorization", "Bearer " + verificationToken);

	var raw = JSON.stringify({
		"score": scoredStars,
		"persoon": persoonID,
		"beschrijving": beschrijving,
		"team": teamID
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	fetch("https://lucas-miserez.be/api/collections/recensies/records", requestOptions)
		.then(response => response.json())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
}


/**
 * Upload/update de link naar jullie website.
 * @param {String} url De URL naar jullie website.
 * @param {String} teamID Jullie teamID.
 */
async function uploadWebsiteLink(url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ", teamID) {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Authorization", "Bearer " + verificationToken);

	var raw = JSON.stringify({
		"spel_url": url
	});

	var requestOptions = {
		method: 'PATCH',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	let linkurl = "https://lucas-miserez.be/api/collections/team/records/" + teamID;
	fetch(linkurl, requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
}