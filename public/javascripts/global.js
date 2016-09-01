// Userlist data array for filling in info box
var userListData = [];

// Populate the user table on initial page load
populateTable2();

// Username link click
$('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);

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
				userListData = data;
				var tableContent = '';

        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
};

// Show User info
function showUserInfo(event) {

	//Prevent Link from Firing
	event.preventDefault();

	// Retrieve username from link rel attribute
	var thisUserName = $(this).attr('rel');

	// Get Index of object based on id value
  var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.username; }).indexOf(thisUserName);

  // Get our User Object
  var thisUserObject = userListData[arrayPosition];

  //Populate Info Box
  $('#userInfoName').text(thisUserObject.fullname);
  $('#userInfoAge').text(thisUserObject.age);
  $('#userInfoGender').text(thisUserObject.gender);
  $('#userInfoLocation').text(thisUserObject.location);

};