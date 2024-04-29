const themeSelector = document.getElementById("themeSelector");

function changeTheme() {
   
  const selectedTheme = themeSelector.value;
  
   
  if (selectedTheme === "dark") {
     
    document.body.classList.add("dark");
    // Change the source of the logo to point to the white logo
    document.getElementById("logo").src = "byui-logo_white.webp";
  } else {
  

    document.body.classList.remove("dark");
    
    document.getElementById("logo").src = "logo.webp";
  }
}

// Add event listener to the themeSelector element to listen for change event
themeSelector.addEventListener("change", changeTheme);

