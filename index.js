const taskContainer = document.querySelector(".task__container");

const globalStore = [];

const generateNewCard = (taskData) => `
<div class="col-md-6 col-lg-4" id="${taskData.id}">
    <div class="card">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>   
      </div>

      <img src="${taskData.imageUrl}"
       class="card-img-top p-3" 
       alt="card image"
       >

      <div class="card-body">
        <h5 class="card-title">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskDescription}</p>
        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
      </div>

      <div class="card-footer ">
        <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
      </div>
      
    </div>
  </div>
  `;

  const loadInitialCardData = () => {
    
    //localstorage to get tasky card data
    const getCardData = localStorage.getItem("tasky");

    //convert to normal object
    const {cards} = JSON.parse(getCardData);

    //loop over those array of task objects to create html card and inject it to the DOM
    cards.map((cardObject) => {
      taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
      
      //updating our globalStore
      globalStore.push(cardObject);
    })

  };

const saveChanges = () =>{
    const taskData = {
        id: `${Date.now()}`, //generates unique number for id every second
        imageUrl: document.getElementById("imageurl").value,
        tastTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,
    };

    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

    globalStore.push(taskData);

    localStorage.setItem("tasky"/*id for local storage to identify the correct files from your computer*/
      , JSON.stringify/* JSON - to javasript objects // stringify - converts to string */
      ({cars:globalStore}) );     //setItem() - add item to local storage




  };