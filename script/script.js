var users = [" Ubaid", " Aqib", " Mohsin", " Ali", " Junaid", " Talha"];
if (localStorage.getItem('newuser') != null) {
    users.unshift(localStorage.getItem('newuser'));
}
var length = users.length;
var index;

button1.onclick = function () {
    document.getElementById('detail2').innerHTML = "The Users List is as: " + '<br />' + users;
}

button2.onclick = function () {
    var newuser2 = prompt("Please! Enter username");
    if (newuser2 != "") {
        newuser2 = newuser2.trim();
        newuser2 = newuser2.toLowerCase();
        var firstchar = newuser2.slice(0, 1);
        firstchar = firstchar.toUpperCase();
        var otherchar = newuser2.slice(1);
        var newuser = " " + firstchar + otherchar;
        localStorage.setItem('newuser', newuser);
        for (index = 0; index <= length; index++) {
            if (newuser === users[index]) {
                alert(newuser + " is already in the list!");
                break;
            }
            else if (length === index) {
                localStorage.setItem('newuser', newuser);
                users.unshift(newuser);
                detail2.innerHTML = newuser + " has been added into the list.";
            }
        }
    }
    else {
        detail2.innerHTML = 'Please add a user!'
    }
}

button3.onclick = function () {
    var deluser2 = prompt("Please! Enter username");
    if (deluser2 != "") {
        deluser2 = deluser2.trim();
        var firstchar2 = deluser2.slice(0, 1);
        firstchar2 = firstchar2.toUpperCase();
        var otherchar2 = deluser2.slice(1);
        otherchar2 = otherchar2.toLowerCase();
        var deluser = " " + firstchar2 + otherchar2;
        if (deluser == localStorage.getItem('newuser')) {
            localStorage.removeItem('newuser');
        }
        for (index = 0; index <= length; index++) {
            if (deluser === users[index]) {
                users.splice(index, 1);
                detail2.innerHTML = deluser + " has been removed from the list.";
                break;
            }
            else if (length === index) {
                alert(deluser + " is not in the list!");
            }
        }
    }
    else {
        detail2.innerHTML = 'You have not removed any user';
    }
}

button4.onclick = function () {
    var username2 = prompt("Please! Enter username");
    if (username2 != "") {
        var firstchar3 = username2.slice(0, 1);
        firstchar3 = firstchar3.toUpperCase();
        var otherchar3 = username2.slice(1);
        otherchar3 = otherchar3.toLowerCase()
        var username = " " + firstchar3 + otherchar3;
        for (index = 0; index <= length; index++) {
            if (username === users[index]) {
                hello.innerHTML = "Hello" + username + "!";
                break;
            }
            else if (length === index) {
                alert(username + " is not available in the list!. First add the " + username + " into the list by clicking on Add user");
            }
        }
    }
    else {
        detail2.innerHTML = "Please don't type space or null values";
    }
}