function timelineChanged() {
    var timelinePosition = document.getElementById("timeline").value;
  
    
    /////////////////////////////////////////////////////////
    //                                                     //
    // Change the value for each index of the arrays below //
    //                                                     //
    /////////////////////////////////////////////////////////
    
    
    var timelineDate = [
      "2025",
      "2027",
      "2029",
      "2034"
    ];
    
    var timelineHeadlines = [
      "1 Year Out",
      "3 Years Out",
      "5 Years Out",
      "10 Years Out"
    ];
  
    var timelineImages = [
      "file:///C:/Users/rando/10%20year%20goals/bposy-tmc110-extra-credit/Media/2025.png",
      "file:///C:/Users/rando/10%20year%20goals/bposy-tmc110-extra-credit/Media/2027.png",
      "file:///C:/Users/rando/10%20year%20goals/bposy-tmc110-extra-credit/Media/2029.png",
      "file:///C:/Users/rando/10%20year%20goals/bposy-tmc110-extra-credit/Media/2034.png",
    ];
  
    var timelineText = [
      " ",
      "",
      "",
      "",
    ]
  
    if ( timelinePosition == "0" ) {
      setTimelineDate( timelineDate[0] );
      setTimelineHeadline( timelineHeadlines[0] );
      setTimelineImage( timelineImages[0] );
      setTimelineText( timelineText[0] );
    }
    if ( timelinePosition == "1" ) {
      setTimelineDate( timelineDate[1] );
      setTimelineHeadline( timelineHeadlines[1] );
      setTimelineImage( timelineImages[1] );
      setTimelineText( timelineText[1] );
    }
   if ( timelinePosition == "2" ) {
      setTimelineDate( timelineDate[2] );
      setTimelineHeadline( timelineHeadlines[2] );
      setTimelineImage( timelineImages[2] );
      setTimelineText( timelineText[2] );
    }
     if ( timelinePosition == "3" ) {
      setTimelineDate( timelineDate[3] );
      setTimelineHeadline( timelineHeadlines[3] );
      setTimelineImage( timelineImages[3] );
      setTimelineText( timelineText[3] );
    }//at least four total positions of the timeline.
    
    //Hint: You'll want to change the index from 0!
    //Remember, the index of an array starts at 0!
    
  }
  
  
  
  
  
  
  
  
  
  
  /////////////////////////////////
  //                             //
  // Do not alter the code below //
  //                             //
  /////////////////////////////////
  
  
  
  
  
  function setTimelineHeadline( headline ) {
    document.getElementById("headline").innerHTML = headline;
  }
  
  function setTimelineDate( date ) {
    document.getElementById("date").innerHTML = date; 
  }
  
  function setTimelineImage( image ) {
    document.getElementById("image").src = image;   
  }
  
  function setTimelineText( text ) {
    document.getElementById("text").innerHTML = text; 
  }
  
  var modified = document.lastModified