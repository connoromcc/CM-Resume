var bio = {
    "name": "Connor McCarthy",
    "role": "Web Developer",
    "contacts": {
        "email": "connorowenmcc@gmail.com",
        "github": "connoromcc",
        "twitter": "@connoromcc",
        "location": "Washington, DC",
    },
    "picture": "images/me.jpg",
    "welcomeMessage": "Hi, there! I'm Connor McCarthy, a senior at Georgetown University. I am hoping to move to the Bay upon graduation, and cut my tech teeth!",
    "skills": ["HTML", "CSS", "JavaScript", "Salesforce", "Microsoft Office", "Research"],
};

var education = {
    "schools": [{
        "name": "Georgetown University",
        "location": "Washington, DC",
        "degree": "BA",
        "major": ["Philosophy"],
        "minor": ["African-American Studies"],
        "datesAttended": "August 2012-May 2016",
        "url": "https://www.georgetown.edu/"
    }, ],
    "onlineCourses": [{
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "completed": "August 2015",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "completed": "August 2015",
        "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "completed": "August 2015",
        "url": "https://www.udacity.com/course/responsive-images--ud882"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "completed": "September 2015",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }, {
        "title": "Intro to jQuery",
        "school": "Udacity",
        "completed": "September 2015",
        "url": "https://www.udacity.com/course/intro-to-jquery--ud245"
    }, {
        "title": "Make a Website",
        "school": "Codecademy",
        "completed": "June 2015",
        "url": "https://www.codecademy.com/en/skills/make-a-website"
    }, {
        "title": "JavaScript",
        "school": "Codecademy",
        "completed": "June 2015",
        "url": "https://www.codecademy.com/en/tracks/javascript"
    }]
};

var work = {
    "jobs": [{
        "employer": "Andreessen Horowitz",
        "title": "Market Development Intern",
        "location": "Menlo Park, CA",
        "datesWorked": "June 2015-August 2015",
        "description": "Responsible for researching executive contacts from Fortune 500, Global 2000 and large government agencies, and participating in executive briefings to document a16z portfolio company feedback and next steps. Participated in over 170 portfolio presentations to CIOs, CMOs, and CISOs at Fortune 500, Global 2000 companies and federal agencies. Added 600+ new contacts to Salesforce by leveraging DiscoverOrg, LinkedIn, InsideView, and data.com. Contributed to connecting the Hispanic National Congress with a16z portfolio companies. Created a best practice template for capturing briefing feedback and next steps that is now used for all a16z new sales hires"
    }, {
        "employer": "Tilt",
        "title": "Student Ambassador",
        "location": "Washington, DC",
        "datesWorked": "July 2015-September 2015",
        "description": "Responsible for generating student interest in and use of the Tilt platform within the Georgetown community. Serving as the first student ambassador at Georgetown University. Developed relevant outreach materials and a template for student engagement at Georgetown. Created a collective means of recording student outreach, engagement, and adoption within student organizations at Georgetown."
    }, {
        "employer": "Capitol Counsel, LLC",
        "title": "Research Assistant",
        "location": "Washington, DC",
        "datesWorked": "June 2014-May 2015",
        "description": "Responsible for research, briefings, outreach, and general logistical support with a particular focus on healthcare and tax legislation (and more narrowly tax inversion policy). Performed outreach and followup with offices of all 435 members of the House and numerous members of the Senate on a number of policy issues. Produced 1,000+ pages of briefings and research for partners. Briefed partners on multiple House and Senate committee hearings attended that were germane to the research area in question"
    }, {
        "employer": "Bakersfield High School",
        "title": "Assistant Debate Coach",
        "location": "Bakersfield, CA",
        "datesWorked": "September 2012-May 2015",
        "description": "Responsible for the instruction of argumentation, research, and strategy as well as the dissemination of presentation-ready research material. Covered multiple topics, ranging from Latin American-US cooperation, space exploration, energy policy, military deployment, and poverty reduction program to ocean exploration programs. Produced 2,000+ pages of research per topic for student use. Developed teaching materials for use upon departure to aid in ramping up future debate activity"
    }, {
        "employer": "Self Employed",
        "title": "Private Tutor",
        "location": "Washington, DC",
        "datesWorked": "April 2013-November 2013",
        "description": "Responsible for the assistance and instruction of students in their AP and honors courses. Logged 100+ hours of direct student instruction. Supported students in 10+ courses, ranging from AP Chemistry to AP Government. Developed lesson plans and study guides across various topics for students."
    }]
};

var projects = {
    "projects": [{
        "title": "Geofencing in C#",
        "dates": "2015",
        "description": "I have made a first attempt at a geofencing feature for connected cars in C#",
        "images": ["images/geofence-sized.jpg"]
    }, {
        "title": "COSC 051 Final Project in C++",
        "dates": "2014",
        "description": "I developed a program to help monitor water output and refugees for my final project in COSC 051 at Georgetown University.",
        "images": ["images/water-tanks-sized.jpg"]
    }, {
        "title": "Github",
        "dates": "2015",
        "description": "Here's my github profile, which contains all of my projects!",
        "images": ["images/github-logo.jpg"]
    }]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length) {
    $("#header").append(HTMLskillsStart);

    for (var i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for (var i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}


work.display = function() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (var i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

};

work.display();


projects.display = function() {
    if (projects.projects.length > 0) {
        for (var i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (var img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
};

projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolMinor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
};

education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
