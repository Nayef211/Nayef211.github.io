function toggleResume() {
    var viewBtn = document.getElementById("view-resume-btn");
    var hideBtn = document.getElementById("hide-resume-btn");

    // hide the resume now
    if (!viewBtn.style.display.includes("none")) {
        // btn.innerHTML = 'Hide Resume &nbsp;<i class="fas fa-angle-double-up"></i>';
        // btn.outerHTML = '<a id="view-resume-btn" class="btn btn-border-purple js-scroll-trigger" href="#intro" onclick="toggleResume()"> Hide Resume &nbsp;<i class="fas fa-angle-double-up"></i></a>';

        $('#sidebar-collapsible').collapse('show');
        $('#resume-collapsible').collapse('show');

        viewBtn.style.display = "none";				
        hideBtn.style.display = "inline-block";

    }
    // show the resume now 
    else {
        // btn.innerHTML = 'View Resume &nbsp;<i class="fas fa-angle-double-down"></i>';
        // btn.outerHTML = '<a id="view-resume-btn" class="btn btn-border-purple js-scroll-trigger" href="#about" onclick="toggleResume()"> View Resume &nbsp;<i class="fas fa-angle-double-down"></i></a>'; 
    
        hideBtn.style.display = "none";
        viewBtn.style.display = "inline-block";				
        
        $('#sidebar-collapsible').collapse('hide');
        $('#resume-collapsible').collapse('hide');
    }
}