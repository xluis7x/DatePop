'use strict';

async function getRandomUser() {
  const response = await fetch('https://randomuser.me/api/?results=3');
  const data = await response.json();
  const user = data;
  const user_1 = data.results[0];
  const user_2 = data.results[1];
  const user_3 = data.results[2];
  console.log(user);
  console.log(user_1);
  console.log(user_2);
  console.log(user_3);
  displayUser1(user_1);
  displayUser2(user_2);
  displayUser3(user_3);
  console.clear();
}

function displayUser1(user_1) {
  const img = document.getElementById("option-one");
  const name = document.getElementById("h3-1");
  const gender = document.getElementById("opt-one");
  const age = document.getElementById("opt-one1");
  const nationality = document.getElementById("opt-one2");

  img.setAttribute('src', `${user_1.picture.large}`)
  name.innerText = `Name: ${user_1.name.title}. ${user_1.name.first} ${user_1.name.last}.`
  gender.innerText = `Gender: ${user_1.gender}.`
  age.innerText = `Age: ${user_1.dob.age}.`
  nationality.innerText = `Nationality: ${user_1.nat} | ${user_1.location.country}.`

}

function displayUser2(user_2) {
  const img_2 = document.getElementById("option-two");
  const name_2 = document.getElementById("h3-2");
  const gender_2 = document.getElementById("opt-two");
  const age_2 = document.getElementById("opt-two1");
  const nationality_2 = document.getElementById("opt-two2");

  img_2.setAttribute('src', `${user_2.picture.large}`)
  name_2.innerText = `Name: ${user_2.name.title}. ${user_2.name.first} ${user_2.name.last}.`
  gender_2.innerText = `Gender: ${user_2.gender}.`
  age_2.innerText = `Age: ${user_2.dob.age}.`
  nationality_2.innerText = `Nationality: ${user_2.nat} | ${user_2.location.country}.`
}

function displayUser3(user_3) {
  const img_3 = document.getElementById("option-three");
  const name_3 = document.getElementById("h3-3");
  const gender_3 = document.getElementById("opt-three");
  const age_3 = document.getElementById("opt-three1");
  const nationality_3 = document.getElementById("opt-three2");

  img_3.setAttribute('src', `${user_3.picture.large}`)
  name_3.innerText = `Name: ${user_3.name.title}. ${user_3.name.first} ${user_3.name.last}.`
  gender_3.innerText = `Gender: ${user_3.gender}.`
  age_3.innerText = `Age: ${user_3.dob.age}.`
  nationality_3.innerText = `Nationality: ${user_3.nat} | ${user_3.location.country}.`
}

getRandomUser();