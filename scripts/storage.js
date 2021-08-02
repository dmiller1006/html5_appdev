$(document).ready(function() {
    $('#mailingListBtn').click(function() {
        let user_firstName = $('#user_firstName').val();
        let userEmail = $('#mailingList').val();
        
        localStorage.setItem(user_firstName, userEmail);       
    })
})