var skills = [
    ["PHP", "vg"],
    ["JavaScript", "av"],
    ["CSS", "g"],
    ["HTML", "vg"],
    ["Laravel", "vg"],
    ["MySQL", "av"],
    ["UNIX", "g"]
];

var languages = [
    ["Filipino", "full", "Native"],
    ["English", "full", "Native"]
];

function loadProficiencies(element, data) {
    var newHtml, level_name;
    
    for (i = 0; i < data.length; i++) {
        var newHtml = '<tr><td class="spacing">%name%</td><td><div class="under"></div><div class="progress %type%_bar"></div><div class="level_name">%level_name%</div></td></tr>'
        newHtml = newHtml.replace("%name%", data[i][0]);
        newHtml = newHtml.replace("%type%", data[i][1]);

        if(data[i][1] === "full"){
            newHtml = newHtml.replace("%level_name%", data[i][2]);
        } else {
            switch (data[i][1]) {
                case "av":
                    level_name = "Average";
                    break;
                case "g":
                    level_name = "Good";
                    break;
                case "vg":
                    level_name = "Very Good";
                    break;
            }
            newHtml = newHtml.replace("%level_name%", level_name);
        }


        document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    }
}

loadProficiencies("#skills", skills);
loadProficiencies("#languages", languages);

