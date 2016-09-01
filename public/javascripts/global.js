// Userlist data array for filling in info box
var userListData = [];

// DOM Ready ======================================
// $(document).ready(function() { // why?
	// Populate the user table on initial page load

	populateTable2();

// });

// Functions ========================================

function populateTable2() {
	fetch('/users/userlist')
		.then((res) => res.json())
		.then((json) => writeHTMLTable(json))
		.catch((res) => {
			$('#userList table tbody').html('<div>Error loading data</div>');
		})
}

// Fill table with user data
function populateTable() {
	// Empty content string
	

	// jQuery AJAX call for userlist JSON
	
	// jQuery AJAX call for JSON
    $.getJSON('/users/userlist')
    	.then(function( data ) {
        // For each item in our JSON, add a table row and cells to the content string
        writeHTMLTable(data)
    })
    .fail(() => {
       	 $('#userList table tbody').html('<div>Error loading data</div>');
     });;
};


var writeHTMLTable = (data) => {
				var tableContent = '';

        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        }
       )

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
}