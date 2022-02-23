const skills_list_array = ["Java", "C/C++", "Python", "React", "HTML", "JavaScript", "CSS", "OpenGL", "p5.js", "Bootstrap", "SASS", "Redux"];
const skills_list_array_html = [];

for (let i = 0; i < skills_list_array.length; i++) {
    skills_list_array_html.push(document.createElement("li"));
}

for (let i = 0; i < skills_list_array_html.length; i++) {
    skills_list_array_html[i].id = "Skill" + (i+1);
    skills_list_array_html[i].innerHTML = skills_list_array[i];
    document.getElementById("content-info-skills-list").appendChild(skills_list_array_html[i]);
}

// document.getElementById("content-info-skills-list").appendChild(document.createElement("li"));
//Courses

const courses_list_array = ["FrontEnd - FreeCodeCamp", "CyberSecurity - EC", "PythonSpecilization - Coursera", "HTML/JavaScript - FreeCodeCamp"];
const courses_list_array_html = [];

for (let i = 0; i < courses_list_array.length; i++) {
    courses_list_array_html.push(document.createElement("li"));
}

for (let i = 0; i < courses_list_array_html.length; i++) {
    courses_list_array_html[i].id = "Course" + (i+1);
    courses_list_array_html[i].innerHTML = courses_list_array[i];
    document.getElementById("content-info-courses-list").appendChild(courses_list_array_html[i]);
}

//Projects

const projects_list_array = ["Inventory Management", "Java Basic Utility Toolkit", "Resume Web", "Physics Engine Web p5js"];
const projects_list_array_html = [];

for (let i = 0; i < projects_list_array.length; i++) {
    projects_list_array_html.push(document.createElement("li"));
}

for (let i = 0; i < projects_list_array_html.length; i++) {
    projects_list_array_html[i].id = "Project" + (i+1);
    projects_list_array_html[i].innerHTML = projects_list_array[i];
    document.getElementById("content-info-projects-list").appendChild(projects_list_array_html[i]);
}

//Remove links
if(window.innerWidth <= 450){
document.styleSheets[0].disabled = true;
}
    else{
document.styleSheets[0].disabled = false;
}
//Fix Body Padding issues and make it responsive using %s according to container width