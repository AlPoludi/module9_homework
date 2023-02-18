const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;


function parserXml(strXml) {
	const parser = new DOMParser();
	const xmlDOM = parser.parseFromString(strXml, "text/xml");
	const listNodes = xmlDOM.querySelector("list");
	const studentsNodes = listNodes.querySelectorAll("student");
	let result = {list: []};

	studentsNodes.forEach((element) => {
		let student = new Object();
		let studentFirstName = element.querySelector("first");
		let studentSecondName = element.querySelector("second");
		let studentAge = element.querySelector("age");
		let studentProf = element.querySelector("prof");
		let nameNode = element.querySelector("name");
		let nameLang = nameNode.getAttribute("lang");

		student.name = studentFirstName.textContent + ' ' + studentSecondName.textContent;
		student.age = studentAge.textContent;
		student.prof = studentProf.textContent;
		student.lang = nameLang;

		result.list.push(student);
	});

	console.log(result)
}

parserXml(xmlString)