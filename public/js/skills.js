
const skills = "./models/skills.json";


function SkillsTable() {
    fetch(skills)
        .then(res => res.json())
        .then(data => {
            
            const tableContainer = document.getElementById('skills-table');
            const table = document.createElement('table');
            const tbody = document.createElement('tbody');

            
            data.forEach(skill => {
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.textContent = skill.skill;
                row.appendChild(cell);
                tbody.appendChild(row);
            });

            // append tbody to table and table to container
            table.appendChild(tbody);
            tableContainer.appendChild(table);
        })
        .catch(err => console.log("Error fetching skills data:", err));
}

// call function on page load
window.onload = SkillsTable;
