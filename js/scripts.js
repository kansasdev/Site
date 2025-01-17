function showEmail(user, domain, elementId) {
    var email = user + "@" + domain;
    document.getElementById(elementId).innerText = email;
}
function dummyFunction() {
    alert("test")
}