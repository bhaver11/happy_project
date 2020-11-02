/* This file will have all the functions related to input output control
It reads inputs from the HTML doc as required, structres the data and then 
calls approriate function in the firebasedb.js file 
This file has been included in the script tag at the end of the HTML file*/






$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    

    var actions = '<a class="add"  title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>'+
                    '<a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>'+
                    '<a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>'
	// Append table with add row form on add new button click
    
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="Message" id="Message"></td>' +
            '<td><input type="text" class="form-control" name="From" id="From"></td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
        $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        
        //Jia
        /**********Add the same ID to the button, ID = row number(index + 1) 
         * This way when the button is clicked, we can get the ID of the button 
         * And using the ID we can determine which row button was pressed 
         * And then only save that row's messages
         * Refer the saveMessage function for more
         */
        $("table tbody tr").eq(index + 1).find(".add").attr('id',index+1)

        //Set the button to trigger saveMessage function
        $("table tbody tr").eq(index + 1).find(".add").on('click',saveMessage)
        
        $('[data-toggle="tooltip"]').tooltip();
    });
	// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });





});


function saveMessage(event){
    /*This Function gets values in each row of the table
    Then calls saveMEssage function of firebase to save 
    the function to the firebase db */

    console.log("Don't worry it is not very complicated!")
    //You can do it, trust me :)

    /*event is the data structure which has all the information
    Get the ID of the button which got clicked using : */
    //This ID is nothing but the index of the row
    var id = event.currentTarget.id

    
    var messageMap = {} //initialize message map

    
    //now use the id to get  the particular row
    //remember id = index of that row
    var row = $("table tbody tr").eq(id)
    
    
    //After getting the row, get the two input field values
    
    //var sender = //find out how to do it, you can use 'find' :p
    //var message = //find child of row
    
    //hint : row.find("td") -->returns an array 

    //save the data to the map
    //messageMap["sender"] = sender
    //messageMap["message"] = message
    //messageMap["receiver"] = receiver
    
    
    //This will be helpful if there are duplicates in the data 
    //messageMap["timeStamp"] = getTimestamp ==> find the function


    //call Firebase function
    //This function is defined in firebasedb.js
    firebaseSaveMessage(messageMap)
    

}
