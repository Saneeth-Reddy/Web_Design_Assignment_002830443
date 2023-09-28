//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

document.addEventListener("DOMContentLoaded", function () {
  var studentInfoElement = document.getElementById("studentInfo");
  studentInfoElement.textContent = "Saneeth Reddy - 002830443";
});




document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.getElementById("add");
  
   
    addButton.addEventListener("click", function () {
   
      var studentTemplate = document.getElementById("studentTemplate");
      var newRow = studentTemplate.cloneNode(true);
  
     
      newRow.style.display = "";
  
     
      newRow.querySelector(".delete-cell").style.display = "none";
      newRow.querySelector(".edit-cell").style.display = "none";
  
     
      var studentNumber = document.querySelectorAll("#myTable tr").length - 4;
      var firstRow = document.querySelector("#myTable tbody tr:nth-child(2)"); 
    var budgetValue = firstRow.querySelector("td:nth-child(7)").textContent;
    var percentageValue = firstRow.querySelector("td:nth-child(8)").textContent;

    newRow.querySelector("td:nth-child(7)").textContent = budgetValue;
    newRow.querySelector("td:nth-child(8)").textContent = percentageValue;
  
      newRow.querySelector("td:nth-child(2)").textContent = "Student " + studentNumber;
      newRow.querySelector("td:nth-child(3)").textContent = "Teacher " + studentNumber;
      
  
      
      var tableBody = document.querySelector("#myTable tbody");
      tableBody.appendChild(newRow);
      alert("Student " + studentNumber + " Record added successfully");
  
     
      var checkboxes = newRow.querySelectorAll("input[type='checkbox']");
      checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
          handleCheckboxChange(checkbox);
        });
      });
    });
  
  
  });
  







function handleCheckboxChange(checkbox) {
  var row = checkbox.parentElement.parentElement;
  var submitButton = document.getElementById("button");
  

  var deleteCell = row.querySelector(".delete-cell");
  var editCell = row.querySelector(".edit-cell");
  var deleteHeader = document.querySelector(".delete-header");
  var editHeader = document.querySelector(".edit-header");
  

  if (checkbox.checked) {

      if (!deleteHeader) {
        
          deleteHeader = document.createElement("th");
          deleteHeader.className = "delete-header";
          deleteHeader.textContent = "DELETE";
          document.querySelector("tr").appendChild(deleteHeader);

      }

      if (!editHeader) {
          
          editHeader = document.createElement("th");
          editHeader.className = "edit-header";
          editHeader.textContent = "EDIT";
          document.querySelector("tr").appendChild(editHeader);
      }

      if (!deleteCell) {
          
          deleteCell = document.createElement("td");
          deleteCell.className = "delete-cell";
          deleteCell.innerHTML = '<button class="delete-button" onclick="deleteRow(this)">Delete</button>';
          row.appendChild(deleteCell);
      }

      if (!editCell) {
         
          editCell = document.createElement("td");
          editCell.className = "edit-cell";
          editCell.innerHTML = '<button class="edit-button" onclick="editRow(this)">Edit</button>';
          row.appendChild(editCell);
      }
      document.querySelector(".delete-header").style.display = "table-cell";
        document.querySelector(".edit-header").style.display = "table-cell";
  } else {
     
      if (deleteCell) {
          row.removeChild(deleteCell);
      }

  
      if (editCell) {
          row.removeChild(editCell);
      }

      
      var checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
      if (checkboxes.length === 0 && deleteHeader) {
          document.querySelector("tr").removeChild(deleteHeader);
      }

    
      if (checkboxes.length === 0 && editHeader) {
          document.querySelector("tr").removeChild(editHeader);
      }
  }
  var row = checkbox.parentElement.parentElement;
  if (checkbox.checked) {
    row.classList.add("checked-checkbox"); 
  } else {
    row.classList.remove("checked-checkbox"); 
  }
  var checkedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");
    if (checkedCheckboxes.length > 0) {
        submitButton.style.backgroundColor = "orange";
        
    } else {
        submitButton.style.backgroundColor = "gray";
       
    }

 
}




function deleteRow(button) {
    var row = button.parentElement.parentElement;
    var table = document.getElementById("myTable");
    
    
    var studentNumber = row.querySelector("td:nth-child(2)").textContent;


    if (confirm("Are you sure you want to delete the details of Student " + studentNumber + "?")) {
        table.deleteRow(row.rowIndex);
        alert("Student " + studentNumber + " details deleted successfully.");
    }
}



function editRow(button) {
    var newDetails = prompt("Enter new details for Student:");
    if (newDetails !== null) {
        alert("New details for Student:" + newDetails);
    }
}




document.addEventListener("DOMContentLoaded", function () {
    
    var dropdownRows = document.querySelectorAll(".dropDownTextArea");
    dropdownRows.forEach(function (row) {
        row.style.display = "none";
    });
});






function toggleDropdown(arrow) {
    var row = arrow.parentElement.parentElement;
    var dropdownRow = row.nextElementSibling;
    if (dropdownRow.style.display === "none" || dropdownRow.style.display === "") {
        dropdownRow.style.display = "table-row";
    } else {
        dropdownRow.style.display = "none";
    }
}










