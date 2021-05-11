// Storage Controller

// Item Controller
const ItemCtrl = (function(){
  // Module - everything except return is private
  const Item = function(id, name, calories){
    // Item constructur
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State (similar to react)
  const data = {
    items: [
      // hardcoded data to start with
      // {id: 0, name: 'Steak Dinner', calories: 1200 },
      // {id: 1, name: 'Cookie', calories: 400 },
      // {id: 2, name: 'Eggs', calories: 300 }
    ],
    currentItem: null, // current item set when I press edit
                      //  placed in the form to get updated
    totalCalories: 0
  };

  return {
    // Public Methods
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID; 
      // create ID
      if(data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // calories to number
      calories = parseInt(calories);

      // Create New Item
      newItem = new Item(ID, name, calories);

      // add to items array
      data.items.push(newItem);

      return newItem;
    },
    getItemById: function(id){
      let found = null;
      // loop through items
      data.items.forEach(function(item){
        if(item.id === id) {
          found = item;
        }
      });

      return found;
    },
    updateItem: function(name, calories){
      // update item in the data structure - not in the ui

      // Calories to number
      calories = parseInt(calories);

      let found = null;

      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        };
      });
      return found;
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){
      return data.currentItem;
    },
    getTotalCalories: function(){
      let total = 0;

      data.items.forEach(function(item){
        total += item.calories;
      });

      // set total cal in data structure
      data.totalCalories = total;

      return data.totalCalories;
    },
    logData: function(){
      return data;
    }
  }
  
})();

// UI Controller
const UICtrl = (function(){

  const UISelectors = {
    // Is used for storing css ID's and classes from the index.html
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
  };

  return {
    // Public Methods
    populateItemList: function(items) {
      let html = '';
      items.forEach(function(item){
        html += ` 
          <li id="item-${item.id}" class="collection-item" >
            <strong>${item.name}:</strong>  <em>${item.calories} calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil-alt"></i>
            </a>
          </li>
        `;
      });
      
      // Insert list Items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      // Show the list if list items > 0
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      li.id = `item-${item.id}`;
      // add HTML
      li.innerHTML = `
        <strong>${item.name}:</strong>  <em>${item.calories} calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil-alt"></i>
        </a>
      `;

      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    updateListItem: function(updatedItem){
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // returns nodelist, which we cannot use foreach on
      // convert Node list to array

      listItems = Array.from(listItems);

      listItems.forEach(function(listItem) {
        const itemID = listItem.getAttribute('id');

        if(itemID === `item-${updatedItem.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `
          <strong>${updatedItem.name}:</strong>  <em>${updatedItem.calories} calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil-alt"></i>
          </a>
        `;
        }
      });



    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;

      // show update button
      UICtrl.showEditState();
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function() {
      UICtrl.clearInput(); // clear input form fields
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function() {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function() {
      return UISelectors;
    }
  }
})();

// App Controller
const App = (function(ItemCtrl, UICtrl){
  // load event listeners
  const loadEventListeners = function() {
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Disable submit on 'Enter' key
    document.addEventListener('keydown', function(e){
      if(e.key === 'Enter') {
        e.preventDefault();
        return false;
      }
    });

    // edit icon click event
    // Can only target by event delegation, since the edit icon
    // is added in runtime
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
    
    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
  }

  // Add item submit
  const itemAddSubmit = function(e){
    // get form input object (name and calories) from UI controller
    const input = UICtrl.getItemInput();
    // check if input and calories in input form is not empty
    if(input.name !== '' && input.calories !== '') {
      // add item - save as var to update UI later on
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      // clear input fields
      UICtrl.clearInput();
    }

    e.preventDefault();
    
  }

  // Put current item into form and show update, delete, back buttons
  const itemEditClick = function(e) {
    if(e.target.classList.contains('edit-item')) {
      // the edit button contains the edit-item class
      // therefore we know it's the correct element within
      // the parent which is clicked

      // Get the list item ID (item-0 or item-1 or ..)
      const listID = e.target.parentNode.parentNode.id;
      // returns the item-0 .. string. We only need the number
      // Break into an array '-' dash is separator
      const listIdArr = listID.split('-');
      // Get actual ID
      const id = parseInt(listIdArr[1]);

      // get Item
      const itemToEdit = ItemCtrl.getItemById(id);

      // set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  };

  const itemUpdateSubmit = function(e) {
    // Get Item input
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update UI
    UICtrl.updateListItem(updatedItem);

    // Update total calories
    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Add total calories to the UI
    UICtrl.showTotalCalories(totalCalories);

    // Clear input forms
    UICtrl.clearEditState();

    e.preventDefault();
  };

  return {
    // Public Methods
    init: function() {
      // Set initial state / clear edit state
       UICtrl.clearEditState();
      // Fetch Items from data structure
      const items = ItemCtrl.getItems();
      
      // check if any items
      if(items.length === 0) {
        UICtrl.hideList();
      } else {
        UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);
  
      // Populate list with items
      UICtrl.populateItemList(items);

      // Load event listeners
      loadEventListeners();
    }
  }
})(ItemCtrl, UICtrl);

// Init App

App.init();