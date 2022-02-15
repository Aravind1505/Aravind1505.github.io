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
