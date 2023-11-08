$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);
  })
  

    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Nami", weight:"10", happiness:"30"};
  
    // 'Treat' Button
    function clickedTreatButton() {
      for (const key in pet_info){
        // Increase pet happiness
        if (key === 'happiness'){
          pet_info[key] = parseInt(pet_info[key],10) + 4;
        }
        // Increase pet weight
        if (key === 'weight') {
          pet_info[key] = parseInt(pet_info[key],10) + 2;
        }
        var treatImage = document.getElementById('treat-image');
        treatImage.src = 'https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots%202.PNG?v=1699441411487';
        treatImage.classList.remove('hidden-treat');

        var petImage = document.getElementById('pet-image');
        // pet eating cat but need to change
        petImage.src = 'https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots.PNG?v=1699420764570';

        setTimeout(function () {
          treatImage.classList.add('hidden-treat');
        }, 500);
            }

      checkAndUpdatePetInfoInHtml();
    }
    
    // 'Play' Button
    function clickedPlayButton() {
      for (const key in pet_info){
        // Increase pet happiness
        if (key === 'happiness'){
          pet_info[key] = parseInt(pet_info[key],10) + 1;
        }
        // Decrease pet weight
        if (key === 'weight') {
          pet_info[key] = parseInt(pet_info[key],10) - 2;
        }
      }
      checkAndUpdatePetInfoInHtml();
    }
    
    // 'Exercise' Button
    function clickedExerciseButton() {
      for (const key in pet_info){
        // Decrease pet happiness
        if (key === 'happiness'){
          pet_info[key] = parseInt(pet_info[key],10) - 5;
        }
        // Decrease pet weight
        if (key === 'weight') {
          pet_info[key] = parseInt(pet_info[key],10) - 3;
        }
      }
      checkAndUpdatePetInfoInHtml();
    }

    // 'Sleep' Button
    function clickedSleepButton() {
      for (const key in pet_info){
        //Increase pet happiness
        if (key === 'happiness'){
          pet_info[key] = parseInt(pet_info[key],10) + 3;
        }
      }
      checkAndUpdatePetInfoInHtml();
    }

    // making sure not negative then final update 
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    // Make sure the weight and the happiness don't go to negative numbers
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      for(const key in pet_info){
        if(key == 'weight' || key == 'happiness'){
            //if less than 0 keep at 0
            if(parseInt(pet_info[key],10) < 0){ 
                pet_info[key] = 0;
                //add something to let the user know to feed pet or make pet happier
            }
        }
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  