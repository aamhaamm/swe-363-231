const coursesData = [
    { level: 'Freshmen', course: 'ICS 104: Introduction to Programming in Python and C', credit: 3 },
    { level: 'Freshmen', course: 'ICS 108: Object-Oriented Programming', credit: 4 },
    { level: 'Sophomore', course: 'SWE 206: Introduction to Software Engineering', credit: 3 },
    { level: 'Sophomore', course: 'SWE 216: Requirements Engineering', credit: 3 },
    { level: 'Sophomore', course: 'ICS 202: Data Structures and Algorithms', credit: 4 },
    { level: 'Sophomore', course: 'ICS 253: Discrete Structures', credit: 3 },
    { level: 'Sophomore', course: 'COE 233: Digital Logic and Computer Organization', credit: 3 },
    { level: 'Junior', course: 'SWE 316: Software Design and Construction', credit: 3 },
    { level: 'Junior', course: 'SWE 326: Software Testing', credit: 3 },
    { level: 'Junior', course: 'SWE 363: Web Engineering and Development', credit: 3 },
    { level: 'Junior', course: 'SWE 387: Software Project Management', credit: 3 },
    { level: 'Junior', course: 'ICS 321: Database Systems', credit: 3 },
    { level: 'Junior', course: 'ICS 343: Fundamentals of Computer Networks', credit: 4 },
    { level: 'Junior', course: 'ICS 344: Information Security', credit: 3 },
    { level: 'Senior', course: 'ICS/SWE XXX', credit: 3 },
    { level: 'Senior', course: 'ICS/SWE XXX', credit: 3 },
    { level: 'Senior', course: 'ICS/SWE XXX', credit: 3 },
    { level: 'Senior', course: 'ICS/SWE XXX', credit: 3 },
    { level: 'Senior', course: 'SWE 411: Software Engineering Project I', credit: 3 },
    { level: 'Senior', course: 'SWE 412: Software Engineering Project II', credit: 2 },
    { level: 'Senior', course: 'SWE 439: Software Quality Engineering', credit: 3 },
    { level: 'Senior', course: 'ICS 433: Operating Systems', credit: 3 }
];


const tbody = document.getElementById('courses_tbody');
let totalCredits = 0;

coursesData.forEach((courseData, index) => {
    const tr = document.createElement('tr');

    if (index === 0 || coursesData[index - 1].level !== courseData.level) {
        const levelTd = document.createElement('td');
        levelTd.textContent = courseData.level;
        levelTd.rowSpan = coursesData.filter(c => c.level === courseData.level).length;
        tr.appendChild(levelTd);
    }

    const courseTd = document.createElement('td');
    courseTd.textContent = courseData.course;
    tr.appendChild(courseTd);

    const creditTd = document.createElement('td');
    creditTd.textContent = courseData.credit;
    tr.appendChild(creditTd);

    tbody.appendChild(tr);
    totalCredits += courseData.credit;
});

document.getElementById('total_credits').textContent = totalCredits;
