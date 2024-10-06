$(document).ready(function() {
    // Form submit for adding a new user
    $("#add_user").submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        
        $.ajax({
            url: '/api/users',  // Ensure this is consistent with your backend route
            method: 'POST',
            data: formData,
            success: function(response) {
                alert("User data added successfully!");
                window.location.href = '/';
            },
            error: function(xhr, status, error) {
                alert("Error adding user: " + xhr.responseText);
            }
        });
    });

    // Form submit for updating user
    $("#update_user").submit(function(event) {
        event.preventDefault();

        var unindexed_array = $(this).serializeArray();
        var data = {};

        $.map(unindexed_array, function(n, i) {
            data[n['name']] = n['value'];
        });

        console.log(data);

        $.ajax({
            url: `/api/users/${data.id}`,  // Ensure the user ID is correctly passed
            method: 'PUT',
            data: data,
            success: function(response) {
                alert("Data updated successfully");
                window.location.href = '/';
            },
            error: function(xhr, status, error) {
                alert("Error updating user: " + xhr.responseText);
            }
        });
    });

    // Handle delete functionality
    if(window.location.pathname == "/"){
        $ondelete = $(".table tbody td a.delete");
        $ondelete.click(function(){
            var id = $(this).attr("data-id");

            var request = {
                "url":`http://localhost:3000/api/users/${id}`,  // Make sure the URL is correct
                "method":"DELETE"  // Fix the typo here
            }

            if(confirm("Do you want to delete this record?")){
                $.ajax(request).done(function(response){
                    alert("Data deleted successfully");
                    location.reload();
                }).fail(function(xhr, status, error){
                    alert("Error deleting user: " + xhr.responseText);
                });
            }
        });
    }
});
