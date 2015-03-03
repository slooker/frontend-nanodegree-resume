 $("#mapDiv").append(googleMap);

 var education = {
  "schools": [
    {
      "name": "College of Southern Nevada",
      "location": "Las Vegas, NV",
      "degree": "No Degree",
      majors: ["Mechanical Engineering", "Architecture"],
      "dates": "1998-1999",
      "url": "http://www.ccsn.edu"
    }
  ]
};

var onlineCourses = {
  "onlineCourses": [
    {
      "title": "Front End Web Developer Nano Degree",
      "school": "Udacity",
      "dates": "2015",
      "url": "http://udacity.com"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Zappos.com",
      "title": "Software Engineer",
      "location": "Las Vegas, NV",
      "dates": "2010-current",
      "description": "Worked as a software engineer architecting, designing and engineering customer service solutions to power our call center"
    },
    {
      "employer": "eReader.com / Fictionwise.com",
      "title": 'Software Engineer',
      'location': 'Johnson City, TN',
      'dates': '2008-2010',
      'description': "Worked as a software engineer architecting and maintaining the website and delivery platform for ebooks that would eventually become the Nook platform"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "In 2 Tech",
      "dates": "2014",
      "description": "Put together a tech program to teach non technical members of our company how to write software using Java.",
      "images": []
    },
    {
      "title": "Twilio Bot",
      "dates": "2015",
      "description": "Wrote a server that handles taking text messages via Twilio and passing them to a raspberry pi controlling a robot.  This was done as part of a class to teach highschool kids at Clark High School programming and robotics",
      "images": []
    },
    {
      "title": "Las Vegas Food Trucks App",
      "dates": "2013-2015",
      "description": "Worked with a team from Code for America that wrote an app for the city of Las Vegas that handled food truck locations in the valley, interfacing with Parkeon parking meters.",
      "images": []
    }
  ]
};

var bio = {
  "name": "Shawn Looker",
  "role": "All around nice guy and software engineer",
  "welcomeMessage": "Welcome message!",
  "contacts": {
    "twitter": "@godzirra",
    "email": "shawn.looker@gmail.com",
    "github": "slooker",
    "location": "Las Vegas, NV"

  },
  "skills": [
    "perl",
    "java",
    "javascript",
    "ruby",
    "sql",
    "swift"
  ],
  "location": "Las Vegas, NV",
  "biopic": "http://i.imgur.com/WzbuQcx.jpg"
}


function generateBio() {
HTMLheaderName = HTMLheaderName.replace("%data%", bio["name"]);
  HTMLheaderRole = HTMLheaderRole.replace("%data%", bio["role"]);
  $('#header').prepend(HTMLheaderRole);
  $('#header').prepend(HTMLheaderName);

  for (var key in bio["contacts"]) {
    var contact = bio["contacts"][key];
    var contactGeneric = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", contact);
    $('#topContacts').append(contactGeneric);
    $('#footerContacts').append(contactGeneric);
  }

  HTMLbioPic = HTMLbioPic.replace("%data%", bio["biopic"]);
  $('#header').append(HTMLbioPic);

  HTMLWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);
  $('#header').append(HTMLWelcomeMsg);

  $('#header').append(HTMLskillsStart);
  
  for (var i in bio["skills"]) {
    var skillHTML = HTMLskills.replace("%data%", bio["skills"][i]);
    $('#skillsH3').append(skillHTML);
  }
}

function generateJobs() {
  
  for (var i in work["jobs"]) {
    var $jqueryObject = $($.parseHTML(HTMLworkStart));
    //$('#workExperience').append(HTMLworkStart);
    var job = work["jobs"][i];
    $jqueryObject.append(HTMLworkEmployer.replace("%data%",job["employer"]));
    $jqueryObject.append(HTMLworkTitle.replace('%data%',job["title"]));
    $jqueryObject.append(HTMLworkDates.replace('%data%',job["dates"]));
    $jqueryObject.append(HTMLworkLocation.replace('%data%',job["location"]));
    $jqueryObject.append(HTMLworkDescription.replace('%data%',job["description"]));
    $('#workExperience').append($jqueryObject);
  }
}

function generateProjects() {
  for (var i in projects["projects"]) {
    var $jqueryObject = $($.parseHTML(HTMLprojectStart));
    //$('#workExperience').append(HTMLworkStart);
    var project = projects["projects"][i];
    $jqueryObject.append(HTMLprojectTitle.replace('%data%',project["title"]));
    $jqueryObject.append(HTMLprojectDates.replace('%data%',project["dates"]));
    $jqueryObject.append(HTMLprojectDescription.replace('%data%',project["description"]));
    $('#projects').append($jqueryObject);
  }
}

function generateEducation() {
  for (var i in education["schools"]) {
    var $jqueryObject = $($.parseHTML(HTMLschoolStart));
    //$('#workExperience').append(HTMLworkStart);
    var school = education["schools"][i];
    console.log(school);
    $jqueryObject.append(HTMLschoolName.replace('%data%',school["name"]));
    $jqueryObject.append(HTMLschoolDegree.replace('%data%',school["degree"]));
    $jqueryObject.append(HTMLschoolDates.replace('%data%',school["dates"]));
    $jqueryObject.append(HTMLschoolLocation.replace('%data%',school["location"]));
    $jqueryObject.append(HTMLschoolMajor.replace('%data%',school["majors"].join(',')));
    $('#education').append($jqueryObject);
  }
}

function generateOnlineCourses() {
  for (var i in onlineCourses["onlineCourses"]) {
    var $jqueryObject = $($.parseHTML(HTMLschoolStart));
    //$('#workExperience').append(HTMLworkStart);
    var course = onlineCourses["onlineCourses"][i];
    $jqueryObject.append(HTMLonlineClasses);
    $jqueryObject.append(HTMLonlineTitle.replace('%data%',course["title"]));
    $jqueryObject.append(HTMLonlineSchool.replace('%data%',course["school"]));
    $jqueryObject.append(HTMLonlineDates.replace('%data%',course["dates"]));
    $jqueryObject.append(HTMLonlineURL.replace('%data%',course["url"]));
    $('#education').append($jqueryObject);
  }
}


