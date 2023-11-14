$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);
  })
  
    //STARTING VALUES
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Nami", weight:"10", happiness:"50", energy:"100"};
  
    // 'Treat' Button
    function clickedTreatButton() {
      for (const key in pet_info){
        // Increase pet happiness
        if (key == 'happiness'){
          pet_info[key] = parseInt(pet_info[key],10) + 4;
        }
        // Increase pet weight
        if (key == 'weight') {
          pet_info[key] = parseInt(pet_info[key],10) + 7;
        }
      }
      // Jquery way of grabbing the image
      var treatImage = $('#treat-image');
      //changing image from blank to tuna
      treatImage.attr('src','https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots%2013.PNG?v=1699909824822');
      // using '.removeClass' to get rid of the css hidden 
      treatImage.removeClass('hidden-treat').stop(true, true).fadeIn(600).fadeOut(900);
       
      var petImage = $('#pet-image');
      
      // pet eating cat but need to change
      petImage.attr('src', 'https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots%208.PNG?v=1699909826862');
      
      // Set a timeout to change the pet image back to the original after 2 seconds (adjust the time as needed)
      setTimeout(function () {
        //original pet image set to appear 
        petImage.attr('src', 'https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots%204.PNG?v=1699909839561');
      }, 1000);

      // Update the pet comment text
      var petComment = $('.pet_Comment');
      petComment.text('OOH, My Favorite!').stop(true, true).fadeIn(800).fadeOut(900);
      
      checkAndUpdatePetInfoInHtml();

    }
    
    // 'Play' Button
    function clickedPlayButton() {
      for (const key in pet_info){
        // Increase pet happiness
        if (key == 'happiness'){
          pet_info[key] = parseInt(pet_info[key],10) + 1;
        }
        // Decrease pet weight
        if (key == 'weight') {
          pet_info[key] = parseInt(pet_info[key],10) - 2;
        }
        // Decrease energy
        if (key == 'energy') {
          pet_info[key] = parseInt(pet_info[key],10) - 4;
        }
      }

      var playImage = $('#play-image');
      playImage.removeClass('hidden-treat').stop(true, true).fadeIn(800).fadeOut(900);
      
      // Update the pet comment text
      var petComment = $('.pet_Comment');
      petComment.text('Yay! Wait what is that?').stop(true, true).fadeIn(800).fadeOut(900);
      petImage = $('#pet-image');
      petImage.attr('src','https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots%207.PNG?v=1699909831379');
      
      setTimeout(function () {
        //original pet image set to appear 
        petImage.attr('src', 'https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots%204.PNG?v=1699909839561');
      }, 1000);

      checkAndUpdatePetInfoInHtml();
    }
    
    // 'Exercise' Button
    function clickedExerciseButton() {
      for (const key in pet_info){
        // Decrease pet happiness
        if (key == 'happiness'){
          pet_info[key] = parseInt(pet_info[key],10) - 5;
        }
        // Decrease pet weight
        if (key == 'weight') {
          pet_info[key] = parseInt(pet_info[key],10) - 3;
        }
        // Decrease energy
        if (key == 'energy') {
          pet_info[key] = parseInt(pet_info[key],10) - 8;
        }
      }
      
      $('#pet-image').first().animate({
        left: 100
      }, {
        duration: 1000
      });
      

      // Update the pet comment text
      var petComment = $('.pet_Comment');
      petComment.text('I tried jumping...').stop(true, true).fadeIn(800).fadeOut(900);
      
      
      checkAndUpdatePetInfoInHtml();
    }

    // 'Sleep' Button
    function clickedSleepButton() {
      for (const key in pet_info){
        //Increase pet happiness
        if (key == 'happiness'){
          pet_info[key] = parseInt(pet_info[key],10) + 3;
        }
        // Increase energy
        if (key == 'energy') {
          if(parseInt(pet_info[key],10)<100){
            pet_info[key] = parseInt(pet_info[key],10) + 20;
          }
        }
      }
      // Update the pet comment text
      var petComment = $('.pet_Comment');
      petComment.text('Sleep Time!').stop(true, true).fadeIn(1000).fadeOut(950);
      
      // Changing pics of pet sleeping
      var petImage = $('#pet-image');
      // pet eating cat but need to change
      petImage.attr('src', 'https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots%209.PNG?v=1699909826453');
      // Set a timeout to change the pet image back to the original after 2 seconds (adjust the time as needed)
      
      setTimeout(function () {
        //image change to make sleep animation
        petImage.attr('src', 'https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots%2010.PNG?v=1699909826112');
      }, 100);

      setTimeout(function () {
        //image change to make sleep animation
        petImage.attr('src', 'https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots%209.PNG?v=1699909826453');
      }, 400);

      setTimeout(function () {
        //image change to make sleep animation
        petImage.attr('src', 'https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots%2010.PNG?v=1699909826112');
      }, 600);

      setTimeout(function () {
        //image change to make sleep animation
        petImage.attr('src', 'https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots%209.PNG?v=1699909826453');
      }, 1100);
      setTimeout(function () {
        //original pet image set to appear 
        petImage.attr('src', 'https://cdn.glitch.global/74676c65-7f92-4fbe-99a8-1a22e12f0a4a/dots%204.PNG?v=1699909839561');
      }, 1500);

      
      checkAndUpdatePetInfoInHtml();
    }

    // making sure not negative then final update 
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Make sure the weight and the happiness don't go to negative numbers
      for(const key in pet_info){
        // Add conditional so if weight is lower than one
        if(key == 'happiness' || key == 'energy'){
          //if less than 1 keep at 1
          if(parseInt(pet_info[key],10) <= 1){ 
            pet_info[key] = 1;
            //add something to let the user know to let the pet sleep
            var petComment = $('.pet_Comment');
            petComment.text('Bro, I need some sleep...').stop(true, true).fadeIn(800).fadeOut(900);
          }
        }
        // if weight is low lets users know to feed the cat
        if(key == 'weight'){
          if(parseInt(pet_info[key],10) <= 1){ 
            pet_info[key] = 1;
            //add something to let the user know to feed pet 
            var petComment = $('.pet_Comment');
            petComment.text('Bro Feed Me!').stop(true, true).fadeIn(800).fadeOut(900);
          }        
        }

        //Wanted to make a max for happiness and energy levels 
        if (key == 'happiness' || key == 'energy'){
          if(parseInt(pet_info[key],10) > 100){ 
            pet_info[key] = 100;
            
          }
        }
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.energy').text(pet_info['energy']);
    }
  