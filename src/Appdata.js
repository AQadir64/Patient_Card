const data = [
  {
    id:"1a",
    userName: "AbdulQadir",
    email: "a.qadir67@outlook.com",
    password: "hello12345"
  },
  {
    id:"1b",
    userName: "Shaheer",
    email: "Shaheer47@outlook.com",
    password: "shaheer12345"
  }
];

localStorage.setItem("data",JSON.stringify(data))

export default data;