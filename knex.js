const knex = require("knex")

const data_base = knex({
    client: 'sqlite3',
    connection: {
        filename: 'sqlite1.db'
    },
    useNullAsDefault: true
})

async function craete_table() {
    await data_base.raw(`CREATE TABLE IF NOT EXISTS COMPANY (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NAME TEXT NOT NULL,
        AGE INT NOT NULL,
        ADDRESS CHAR(50),
        SALARY REAL);`)
}


async function add_info() {
    await data_base.raw(`INSERT INTO COMPANY (NAME,AGE,ADDRESS,SALARY)
    VALUES ('Paul', 32, 'California', 20000.00 );`)
    await data_base.raw(`INSERT INTO COMPANY (NAME,AGE,ADDRESS,SALARY)
    VALUES ('Allen', 25, 'Texas', 15000.00 );`)
    await data_base.raw(`INSERT INTO COMPANY (NAME,AGE,ADDRESS,SALARY)
    VALUES ('Teddy', 23, 'Norway', 20000.00 );`)
    await data_base.raw(`INSERT INTO COMPANY (NAME,AGE,ADDRESS,SALARY)
    VALUES ('Mark', 25, 'Rich-Mond ', 65000.00 );`)
    await data_base.raw(`INSERT INTO COMPANY (NAME,AGE,ADDRESS,SALARY)
    VALUES ('David', 27, 'Texas', 85000.00 );`)
    await data_base.raw(`INSERT INTO COMPANY (NAME,AGE,ADDRESS,SALARY)
    VALUES ('Kim', 22, 'South-Hall', 45000.00 );`)

}

async function get_all() {
    const employee = await data_base.raw("select * from COMPANY")
    console.log(employee)
    await data_base.destroy()
}
const new_employee = {name:"david" , age:27 , address: "alaska", salary: 4500}
async function insertRow(new_employee){
    await data_base.raw(`INSERT INTO COMPANY (NAME,AGE,ADDRESS,SALARY)
    VALUES (?,?,?,? );`)
    [new_employee.name,new_employee.age,new_employee.address,new_employee.salary]
}
craete_table()
add_info()

insertRow(new_employee)
get_all()

