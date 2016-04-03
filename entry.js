require("./style.css");
var faker = require('faker');
var getFullname = function () {
    return faker.name.firstName() + ' ' + faker.name.lastName();
}

var range = function(count) {
    return Array.apply(null, Array(count)).map(function(_, i){return i})
}

var getUserData = function(){
    return {
        fullname : getFullname(),
        avatar : faker.image.avatar(),
    }
}

var getUserListData = function(count){
    return range(count).map(getUserData)
}

var createUserComponent = function(domElement, onClick) {
    return {
        render: function(userData) {
            var fullname = userData.fullname;
            var avatar = userData.avatar;

            domElement.innerHTML =  '<div class="card">' + 
               '<div class="avatar">' + '<img src="' + avatar + '"/>' + '<div>' +
               '<div class="fullname">' + fullname + '<div>' +
            '</div>'

            var myElem = domElement.querySelector('.card');

            myElem.addEventListener('click', function() {
               onClick(userData);
            })
        }
    }
}

var createUserListComponent = function(domElement, onUserClick) {
    return {
        render: function(userListData) {
            domElement.innerHTML = '<div class="cardList">' + 
            '</div>'

            var myElem = domElement.querySelector('.cardList');

            userListData.forEach(function(userData){
              var cardElement = document.createElement('DIV');
              var cardComponent = createUserComponent(cardElement, onUserClick);
              cardComponent.render(userData);
              myElem.appendChild(cardElement);
            })
        }
    }
}

var component1 = createUserListComponent(content1, function(user){console.log('user', user.fullname)});
// var component2 = createUserListComponent(content2);

component1.render(getUserListData(2));
// setInterval(function(){
//     component2.render(getUserListData(2));
// }, 2000)


