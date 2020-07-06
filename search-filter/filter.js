function filter() {
    // Declare variables
    var input, filter, card, cardHead, cardDesc, i, txtValue1, txtValue2;
    input = document.getElementById('searchtxt');
    filter = input.value.toUpperCase();
    card = document.getElementsByClassName("card");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < card.length; i++) {
      cardHead = card[i].getElementsByClassName("card-head")[0];
      cardDesc = card[i].getElementsByClassName("card-desc")[0];
      txtValue1 = cardHead.textContent || cardHead.innerText;
      txtValue2 = cardDesc.textContent || cardDesc.innerText;
      if ((txtValue1.toUpperCase().indexOf(filter) > -1) || txtValue2.toUpperCase().indexOf(filter) > -1) {
        card[i].style.display = "inline-block";
      } else {
        card[i].style.display = "none";
      }
    }
  }