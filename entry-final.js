require("./style.css");
var faker = require('faker');
var contentDomNode = document.getElementById('content');

var range = function(i) {
  return Array.apply(null, Array(5)).map(function (_, i) {return i;})  
} 

var genUserData = function(){
    return {
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        avatar: faker.image.avatar()
    }
}

var genUserListData = function(length){
    return range(length).map(genUserData)
}

const userTemplate = function(userData) {
    var firstName = userData.firstName;
    var lastName = userData.lastName;
    var avatar = userData.avatar;

    var fullName = firstName + ' ' + lastName;

    return '<div class="card">' + 
            '<span class="fullName">' + fullName + '</span>' +        
            '<img class="avatar" src="' + avatar + '"></img>' +        
    '</div>'
}

var userListTemplate = function(userListData) {
    return '<div class="cardList">' +
      userListData.map(userTemplate).join('') +
       '</div>'  
}

contentDomNode.innerHTML = userListTemplate(genUserListData(10))
