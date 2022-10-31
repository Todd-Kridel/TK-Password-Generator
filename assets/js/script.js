// [ User Story ]
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
//
// Assignment code


var password_length = 0;
var include_password_numbers = false;
var include_password_letters_lowercase = false;
var include_password_letters_uppercase = false;
var include_password_characters_special = false;
var enough_criteria_responses_are_valid = false;
var password_processing = "";
var error_processing = "";
//
// [ Acceptance Criteria ]
// GIVEN I need a new, secure password...
//
// [ Acceptance Criteria ]
// WHEN I click the button to generate a password
// * THEN I am presented with a series of prompts for password criteria
// WHEN all prompts are answered
// * THEN a password that matches the selected criteria is generated
//
// Get references to the #generate element
// Add event listener to generate button
//
var generate_button = document.querySelector("#generate_button");
generate_button.addEventListener("click", generate_password);
//
function generate_password() {
  //
  prompt_for_password_criteria();
  //
  if ((password_length > 0) && (enough_criteria_responses_are_valid == true)) {
    //
    // RANDOMLY GENERATE THE PASSWORD: RANDOM ARRAY SELECTIONS AND THEN RANDOM CHARACTER SELECTIONS IN THE ARRAYS
    //
    var possible_password_characters_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      // array number 1; 10 character elements
    var possible_password_characters_letters_lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      // array number 2; 26 character elements
    var possible_password_characters_letters_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      // array number 3; 26 character elements
    var possible_password_characters_special  = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
      // array number 4; 32; character elements
    var amount_of_possible_character_arrays = 4;
    var amount_of_selected_character_types = 0;
    var selected_character_arrays = ["X", "NO", "NO", "NO", "NO"];
      // Initialize the selection array sequence number representation record to a starting reset non-selected status.
      // Index 0 is a non-used filler element to allow for consistent array index numbering with the array sequence position numbers.
    var selected_character_arrays_indexes = ["X", "-", "-", "-", "-"];
      // Initialize the selection array index representation record to a starting reset non-selected status.
      // Index 0 is a non-used filler element to allow for consistent array index numbering with the array sequence position numbers.
    //
    // LOOP PROCESSING FOR THE SELECTED PASSWORD COMPONENT[S] WHICH ARE RANDOMLY-SELECTED FROM THEIR ARRAYS
    //
    // Identify the quantity amount of the possible character arrays/lists that are selected by the user for the new password.
    // The quantity amount of the selected arrays will allow for the sequence numbers of the arrays to be identified and processed.
    if (include_password_numbers == true) {
      selected_character_arrays[1] = "YES";
      amount_of_selected_character_types = amount_of_selected_character_types + 1;
    }
    if (include_password_letters_lowercase == true) {
      selected_character_arrays[2] = "YES";
      amount_of_selected_character_types = amount_of_selected_character_types + 1;
    }
    if (include_password_letters_uppercase == true) {
      selected_character_arrays[3] = "YES";
      amount_of_selected_character_types = amount_of_selected_character_types + 1;
    }
    if (include_password_characters_special == true) {
      selected_character_arrays[4] = "YES";
      amount_of_selected_character_types = amount_of_selected_character_types + 1;
    }
    // Identify the sequence numbers of the possible character arrays/lists that are selected by the user for the new password.
    // The sequence numbers of the selected arrays will allow for the indexes of the arrays to be identified and processed.
    last_processed_list_number = 1; // the first-pass initialization for a sliding progressive starting index
    for (selection_array_list_indexes_loop = 1; selection_array_list_indexes_loop <= amount_of_selected_character_types; 
      selection_array_list_indexes_loop = selection_array_list_indexes_loop + 1) {
      for (selection_array_list_number_loop = (last_processed_list_number + 1); selection_array_list_number_loop <= amount_of_possible_character_arrays; 
        selection_array_list_number_loop = selection_array_list_number_loop + 1) {
        if (selected_character_arrays[selection_array_list_number_loop] == "YES") {
          selected_character_arrays_indexes[selection_array_list_indexes_loop] = selection_array_list_number_loop;
          last_processed_list_number = selection_array_list_number_loop;
          selection_array_list_number_loop = amount_of_possible_character_arrays;
          }
        }  // Force-exit/break from the inner loop and move to the next index position of the outer loop.
      }  // For the next inner loop...custom-set the advanced slider starting position to prevent re-processing of data.
    //
    // Initialize the password processing variables.
    var random_index_of_selected_character_array = null;
    var random_selected_array = "";
    var random_index_of_character_in_array = null;
    var random_selected_character = "";
    var password_processing_loop_character_concatenation = "";
    var generated_password = "";
    //
    // Now that the selected character arrays are identified and indexed...randomly process them based on their known maximum 
    // element lengths (quantities of contained characters).
    //
    for (password_length_loop_index = 1; password_length_loop_index <= password_length; 
      password_length_loop_index = password_length_loop_index + 1) {
      // For each to-be-generated password character...first randomly pick a user-selected character array.
      // Then randomly select a character from that array.
      random_index_of_selected_character_array = generate_random_number(amount_of_selected_character_types);
      //
      if (random_index_of_selected_character_array == 1) {
        random_selected_array = possible_password_characters_numbers;
      }
      if (random_index_of_selected_character_array == 2) {
        random_selected_array = possible_password_characters_letters_lowercase;
      }
      if (random_index_of_selected_character_array == 3) {
        random_selected_array = possible_password_characters_letters_uppercase;
      }
      if (random_index_of_selected_character_array == 4) {
        random_selected_array = possible_password_characters_special;
      }
      random_selected_array_length = random_selected_array.length;
      random_index_of_character_in_array = generate_random_number(random_selected_array_length);
      random_selected_character = random_selected_array[random_index_of_character_in_array];
      password_processing_loop_character_concatenation = password_processing_loop_character_concatenation + random_selected_character;
    }  // Move to the next random selected array and random selected character of the password until reaching the selected password length.
    //
    // Record the final generated password data for transfer to the next process.
    generated_password = password_processing_loop_character_concatenation;
  }
  else {
    generated_password = "";
  }
  // Display a password_processing status message before displaying the generated password.
  // Or/And display some error status information if applicable...especially if a password could not be generated.
  window.alert(password_processing);
  generated_password = generated_password + "\n" + error_processing;
  display_password(generated_password);
  //
  function generate_random_number(passed_range_number) {
    return Math.floor(Math.random() * passed_range_number);
  }
}


// [ Acceptance Criteria ]
// WHEN prompted for password criteria
// * THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// * THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// * THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// * THEN my input should be validated and at least one character type should be selected
//
function prompt_for_password_criteria() {
  //
  var user_response = "";
  var user_response_errors = "";
  var should_re_start_prompting = false;
  //
  user_response = prompt("What character length (8 to 128) do you want for your password?");
  // VALIDATE THE INPUT; EXIT AND RE-START IF NOT VALID
  if (user_response == null) {  // The user selected the Cancel button to exit the application.
    should_re_start_prompting = "*CANCEL*";
    password_processing = password_processing + "\n" + "*CANCELLED*";
    user_response_errors = user_response_errors + "\n" + "*CANCELLED*";
  }
  else if (Number.isInteger(user_response) && ((user_response >= 8) && (user_response <= 128))) {
    password_length = user_response;
  }
  else {  // not a valid/integer number entry or not a number entry
    password_length = "0";
    should_re_start_prompting = true;
    user_response_errors = user_response_errors + "\n" + 
      "ERROR: A non-valid password length was specified.";
  }
  user_response = "";
  //
  if ((should_re_start_prompting != "*CANCEL*") && (should_re_start_prompting == false)) {
    user_response = prompt("Do you want for numbers to be used in your password (Y/Yes or N/No?");
    // VALIDATE THE INPUT; EXIT AND RE-START IF NOT VALID
    if (user_response == null) {  // The user selected the Cancel button to exit the application.
      should_re_start_prompting = "*CANCEL*";
      password_processing = password_processing + "\n" + "*CANCELLED*";
      user_response_errors = user_response_errors + "\n" + "*CANCELLED*";
      enough_criteria_responses_are_valid = false;
        // There is not at least 1 type of include-character that is specified and therefore a password cannot be generated.
    }
    else if ((user_response.toUpperCase() == "Y") || (user_response.toUpperCase() == "YES")) {
      include_password_numbers = true;
      enough_criteria_responses_are_valid = true;
      password_processing = password_processing + "\n" + "+ Include number characters.";
    }
    else if ((user_response.toUpperCase() == "N") || (user_response.toUpperCase() == "NO")) {
      include_password_numbers = false;
    }
    else {
      include_password_numbers = false;
      user_response_errors = user_response_errors + "\n" + 
        "ERROR: A non-valid include-numbers response was specified.";
    }
  }
  user_response = "";
  //
  if ((should_re_start_prompting != "*CANCEL*") && (should_re_start_prompting == false)) {
    user_response = prompt("Do you want for lowercase letters to be used in your password (Y/Yes or N/No?");
    // VALIDATE THE INPUT; EXIT AND RE-START IF NOT VALID
    if (user_response == null) {  // The user selected the Cancel button to exit the application.
      should_re_start_prompting = "*CANCEL*";
      password_processing = password_processing + "\n" + "*CANCELLED*";
      user_response_errors = user_response_errors + "\n" + "*CANCELLED*";
    }
    else if ((user_response.toUpperCase() == "Y") || (user_response.toUpperCase() == "YES")) {
      include_password_letters_lowercase = true;
      enough_criteria_responses_are_valid = true;
      password_processing = password_processing + "\n" + "+ Include lowercase letter characters.";
    }
    else if ((user_response.toUpperCase() == "N") || (user_response.toUpperCase() == "NO")) {
      include_password_letters_lowercase = false;
    }
    else {
      include_password_letters_lowercase = false;
      user_response_errors = user_response_errors + "\n" + 
        "ERROR: A non-valid include-lowercase-letters response was specified.";
    }
  }
  //
  user_response = "";
  if ((should_re_start_prompting != "*CANCEL*") && (should_re_start_prompting == false)) {
    user_response = prompt("Do you want for uppercase letters to be used in your password (Y/Yes or N/No?");
    // VALIDATE THE INPUT; EXIT AND RE-START IF NOT VALID
    if (user_response == null) {  // The user selected the Cancel button to exit the application.
      should_re_start_prompting = "*CANCEL*";
      password_processing = password_processing + "\n" + "*CANCELLED*";
      user_response_errors = user_response_errors + "\n" + "*CANCELLED*";
      }
    else if ((user_response.toUpperCase() == "Y") || (user_response.toUpperCase() == "YES")) {
      include_password_letters_uppercase = true;
      enough_criteria_responses_are_valid = true;
      password_processing = password_processing + "\n" + "+ Include uppercase letter characters.";
    }
    else if ((user_response.toUpperCase() == "N") || (user_response.toUpperCase() == "NO")) {
      include_password_letters_uppercase = false;
    }
    else {
      include_password_letters_uppercase = false;
      user_response_errors = user_response_errors + "\n" + 
        "ERROR: A non-valid include-uppercase-letters response was specified.";
    }
  }
  //
  user_response = "";
  if ((should_re_start_prompting != "*CANCEL*") && (should_re_start_prompting == false)) {
    user_response = prompt("Do you want for special characters to be used in your password (Y/Yes or N/No?");
    // VALIDATE THE INPUT; EXIT AND RE-START IF NOT VALID
    if (user_response == null) {  // The user selected the Cancel button to exit the application.
      should_re_start_prompting = "*CANCEL*";
      password_processing = password_processing + "\n" + "*CANCELLED*";
      user_response_errors = user_response_errors + "\n" + "*CANCELLED*";
      }
    else if ((user_response.toUpperCase() == "Y") || (user_response.toUpperCase() == "YES")) {
      include_password_characters_special = true;
      enough_criteria_responses_are_valid = true;
      password_processing = password_processing + "\n" + "+ Include special characters.";
    }
    else if ((user_response.toUpperCase() == "N") || (user_response.toUpperCase() == "NO")) {
      include_password_characters_special = false;
    }
    else {
      include_password_characters_special = false;
      user_response_errors = user_response_errors + "\n" + 
        "ERROR: A non-valid include-special-characters response was specified.";
    }
  }
  //
  user_response = "";
  if ((include_password_numbers == false ) && 
    (include_password_letters_lowercase == false) && 
    (include_password_letters_uppercase == false) && 
    (include_password_characters_special == false)) {
    should_re_start_prompting = true;
    user_response_errors = user_response_errors + "\n" + 
      "ERROR: A minimum of 1 type of include-character (number, letter, special) must be specified.";
    }
  else {
    should_re_start_prompting = false;
    enough_criteria_responses_are_valid = true;
  }
  //
  if (((should_re_start_prompting == "*CANCEL*") || (should_re_start_prompting == false)) && (enough_criteria_responses_are_valid == true)) {
    // The criteria response data is good and a password can be generated.
    password_processing = password_processing + "\n" + 
      "The criteria response data is good (or good-enough) and a password (of at least 1 character type) can be generated.";
    }
  // Display an error message if some non-valid response/input data occurred.
  // The user has to re-start the password-generation process if enough data for password generation was not specified.
  if (user_response_errors != "") {
    user_response_errors = user_response_errors + "\n" + 
      "You will have to re-start the password-generation process if a password was not generated from the data that was specified and if you continue to want a new password.";
    password_processing = password_processing + "\n" + 
      "Some non-valid response/input data occurred; Refer to the message text area of the application main window.";
    error_processing = user_response_errors;
  }
}


// WHEN the password is generated
// * THEN the password is either displayed in an alert or written to the page
//
// Write password to the #password input
function display_password(passed_generated_password_or_and_error) {
  var passwordText = document.querySelector("#password");
  passwordText.textContent = passed_generated_password_or_and_error;
}
