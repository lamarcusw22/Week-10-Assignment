// JavaScript code to handle form submission and to-do list update
document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the task from the form
    let task = document.getElementById('task').value;
  
    // Create a new to-do list item with a checkbox to check when it's completed.
    let listItem = document.createElement('tr');
    listItem.innerHTML = `
      <td><input type="checkbox" class="form-check-input"></td>
      <td>${task}</td>
      <td><button class="btn btn-danger btn-sm remove-btn">Remove</button></td>
    `;
  
    // Add event listener to remove button and remove the task from the list.
    listItem.querySelector('.remove-btn').addEventListener('click', function() {
      listItem.remove(); 
    });
  
    // Add the new item to the to-do list
    document.getElementById('todo-list').appendChild(listItem);
  
    // Reset the form field
    document.getElementById('task').value = '';
  });

  