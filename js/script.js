'use strict';

fetch('https://randomuser.me/api/?results=2')
  .then((response) => response.json())
  .then((data) => {
    console.log('data:', data);
  })
  .catch((error) => {
    alert('Ha ocurrido un error, por favor intente más tarde.');
    console.log('error:', error);
  });
