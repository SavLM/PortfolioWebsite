var education = [
  {
    name:"University of Virginia School of Engineering and Applied Science",
    date:"Class of 2019",
    descr:"Bachelor of Science in Computer Engineering"
  },
  {
    name:"Jackson River Governor’s School",
    date:"Class of 2013",
    descr:"2-year program at Dabney S. Lancaster Community College"
  },
  {
    name:"Bath County High School",
    date:"Class of 2013",
    descr:"Graduated Salutatorian with an Advanced Diploma"
  }
];

var work = [
  {
    title:"Information Technology Assistant Jr.",
    company:"Federal Reserve Information Technology",
    start:"August 15, 2017",
    end:"January 15, 2018",
    descr:"<ul> \
      <li>Project Coordinator and Administrative Assistant for the Federal Reserve’s National IT internship program</li> \
      <li>Aided project transitioning Fed applications and services to a new, secure environment</li> \
      <li> \
        <ul> \
          <li>Performed administrative tasks for Scrum teams</li> \
          <li>Improved organizational tools and documented standards/processes</li> \
          <li>Prepared communications material for senior leadership</li> \
          <li>Transcribed important discussions and outlined/tracked action items</li> \
        </ul> \
      </li> \
    </ul>"
  },
  {
    title:"Technical Project Assistant",
    company:"University of Virginia Career Center",
    start:"May 17, 2016",
    end:"August 1, 2016",
    descr:"<ul> \
      <li>Assistant for the UVA Career Center IT department</li> \
      <li>Supported the implementation and organization of a new recruiting platform</li> \
      <li> \
        <ul> \
          <li>Aided with the extraction, synthesis, and management of large data sets for transition to new platform</li> \
          <li>Assisted with the development of student/staff/employer training materials</li> \
        </ul> \
      </li> \
    </ul>"
  },
  {
    title:"Kids Club Attendant",
    company:"The Omni Homestead Resort",
    start:"December 3, 2011",
    end:"June 13, 2015",
    descr:"<ul> \
      <li>3½ years as a Daycare Counselor at the Omni Homestead Resort</li> \
    </ul>"
  }
];

var skill = [
  {
    category:"Languages",
    skills:["C++", "C", "Java", "Python", "CSS", "HTML", "JavaScript", "MySQL", "PHP", "x86 Assembly"]
  },
  {
    category:"Hardware",
    skills:["Microcontrollers", "Designing PCBs",  "Hardware testing devices: Oscilloscope, Multisim, Digital Multimeter, Virtual Bench"]
  },
  {
    category:"Applications",
    skills:["JIRA", "SharePoint", "Visio", "Multisim", "MATLAB", "Logisim", "Eclipse", "Emacs", "Vim", "Microsoft Office", "Django Framework", "Some familiarity with Microsoft Azure Cloud and with AWS"]
  },
  {
    category:"Project Management",
    skills:["Risk and Issue tracking", "Action Item logging",  "User Story writing", "Scribing for meetings", "Creating Gantt Charts"]
  }
];

var leadership = [
  {
    title:"Capstone Project Team Member",
    date:"Fall of 2016",
    descr:"5-month long Senior Project with a team of 4 other Computer/Electrical Engineering students developing a vest designed to assist individuals with visual impairments navigate the real world using spatial simulation powered by a system of infrared sensors causing haptic feedback."
  },
  {
    title:"Cavalier Marching Band Member",
    date:"2013-2014",
    descr:"Marched 2 seasons with 300+ other UVA students during UVA Football games and attended a leadership camp for improving teamwork and leadership skills."
  },
  {
    title:"Engineering Project Team Member",
    date:"Fall of 2013",
    descr:"Worked with 47 other individuals to address the problems with current youth football helmets in preventing concussions among youth players by creating a helmet to better protect the players’ heads and necks."
  },
]

var res_view = false;
var res_id = 0;
function showInfo(i, item, deflt) {
  if(i == res_id && res_view){
    document.getElementById("resume_info").innerHTML = deflt;
    res_view = false;
  }
  else{
    document.getElementById("resume_info").innerHTML = item;
    res_view = true;
  }
  res_id = i;
}
