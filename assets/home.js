
var patients=[
    {
        "patient-name":"Mohamed Ashraf",
        "phone":"01006915641",
        "date":"17/11/2023",
        "age":22,
        "section":"Fixed prosthodontics"
    },
    {
        "patient-name":"mohamed saad",
        "phone":"01006956661",
        "date":"11/4/2024",
        "age":23,
        "section":"Removable prosthodontics"
    },
    {
        "patient-name":"ibrahim Ashraf",
        "phone":"01006915641",
        "date":"18/4/2022",
        "age":22,
        "section":"Operative"
    },
    {
        "patient-name":"ahmed osama",
        "phone":"01006915641",
        "date":"18/4/2023",
        "age":24,
        "section":"Endodontic"
    },
    {
        "patient-name":"mohamed waleed",
        "phone":"01006915641",
        "date":"18/4/2021",
        "age":20,
        "section":"Maxillo-Facial surgery"
    },
    {
        "patient-name":"hossam elsayed",
        "phone":"01006915641",
        "date":"18/5/20023",
        "age":28,
        "section":"Fixed prosthodontics"
    },
    {
        "patient-name":"mohamed tawfik",
        "phone":"01006915641",
        "date":"18/2/2024",
        "age":27,
        "section":"Removable prosthodontics"
    },
    {
        "patient-name":"omar taher",
        "phone":"01006915641",
        "date":"20/8/2023",
        "age":22,
        "section":"Operative"
    },
    {
        "patient-name":"khaled elsaid",
        "phone":"01006915641",
        "date":"17/3/2024",
        "age":25,
        "section":"Endodontic"
    }
    
]
for( let patient of patients){
    let content=`<tr>
    <td><a href="patient.html">${patient["patient-name"]}</a></td>
    <td>${patient.phone}</td>
    <td>${patient.date}</td>
    <td>${patient.age}</td>
    <td><span class="status Maxillo-Facial surgery">${patient.section}</span></td>
    </tr>`
document.getElementById("myTable").innerHTML+=content
}

function filterTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        if (td.length > 0) {
            let textContent = "";
            for (let j = 0; j < td.length; j++) {
                textContent += td[j].textContent || td[j].innerText;
            }
            if (textContent.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
