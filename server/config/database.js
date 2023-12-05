const db_name = 'procast'

// import mysql package
const mysql = require('mysql2');

// create a connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'r00t',
    // port: 3307
    // database: 'procast'
})

connection.connect((err) => {
    if(err) throw err;
    console.log('database connected successfully')
})

let sql;
//drop database if exist
sql = `DROP DATABASE IF EXISTS ${db_name}`
connection.query(sql,(error,result)=>{
	if(error) throw error;
	console.log(`database dropped: ${db_name}`)
})


//re-create database if doesnt exist
sql = `CREATE DATABASE IF NOT EXISTS ${db_name}`
connection.query(sql,(error,result)=>{
	if(error) throw error;
	console.log(`database created: ${db_name}`)
})

//use database
sql = `USE ${db_name}`
connection.query(sql,(error,result)=>{
	if(error) throw error;
	console.log(`database used: ${db_name}`)
})

// create table if not exists
const createUserTable = `CREATE TABLE IF NOT EXISTS \`user\` (
  \`uid\` INTEGER PRIMARY KEY AUTO_INCREMENT,
  \`username\` CHAR(50) UNIQUE,
  \`email\` CHAR(50) UNIQUE,
  \`password\` CHAR(50)
);
`;
connection.query(createUserTable,(error,result)=>{
	if(error) throw error;
	console.log(`table user was created`)
})


const createChatTable = `
CREATE TABLE IF NOT EXISTS \`chat\` (
  \`chat_order\` INTEGER PRIMARY KEY AUTO_INCREMENT,
  \`receiver_uid\` INTEGER,
  \`sender_uid\` INTEGER,
  \`content\` VARCHAR(100)
);
`;
connection.query(createChatTable,(error,result)=>{
	if(error) throw error;
	console.log(`table chat was created`)
})


const createCommentTable = `
CREATE TABLE IF NOT EXISTS \`comment\` (
  \`cid\` INTEGER PRIMARY KEY AUTO_INCREMENT,
  \`commenter_uid\` INTEGER,
  \`content\` VARCHAR(100),
  \`date\` DATETIME
);
`;
connection.query(createCommentTable,(error,result)=>{
	if(error) throw error;
	console.log(`table comment was created`)
})


const createProjectStatusTable = `
CREATE TABLE IF NOT EXISTS \`project_status\` (
  \`pid\` INTEGER PRIMARY KEY AUTO_INCREMENT,
  \`project_title\` VARCHAR(255),
  \`status\`  ENUM ('complete','pending','cancel') DEFAULT 'pending', 
  \`project_leader\` INTEGER
);
`;
connection.query(createProjectStatusTable,(error,result)=>{
	if(error) throw error;
	console.log(`table project_status was created`)
})

const createProjectMemberTable = `
CREATE TABLE IF NOT EXISTS \`project_member\` (
  \`mid\` INTEGER PRIMARY KEY AUTO_INCREMENT,
  \`uid\` INTEGER,
  \`pid\` INTEGER
);
`;
connection.query(createProjectMemberTable,(error,result)=>{
	if(error) throw error;
	console.log(`table project_member was created`)
})


const createTaskTable = `
CREATE TABLE IF NOT EXISTS \`task\` (
  \`tid\` INTEGER PRIMARY KEY AUTO_INCREMENT,
  \`task_name\` VARCHAR(50),
  \`status\`  ENUM ('complete','pending','cancel') DEFAULT 'pending', 
  \`description\` VARCHAR(200),
  \`file\` VARCHAR(50),
  \`roleid\` INTEGER,
  \`uid\` INTEGER,
  \`pid\` INTEGER
);
`;
connection.query(createTaskTable,(error,result)=>{
	if(error) throw error;
	console.log(`table task was created`)
})


const createRoleTable = `
CREATE TABLE IF NOT EXISTS \`role\` (
  \`roleid\` INTEGER PRIMARY KEY AUTO_INCREMENT,
  \`role_name\` CHAR(50) UNIQUE
);
`;
connection.query(createRoleTable,(error,result)=>{
	if(error) throw error;
	console.log(`table role was created`)
})


const createUserProfileTable = `
CREATE TABLE IF NOT EXISTS \`user_profile\` (
  \`uid\` INTEGER,
  \`position\` CHAR(50),
  \`roleid\` INTEGER,
  \`profile\` BLOB,
  \`github\` VARCHAR(255),
  INDEX (\`roleid\`)
);
`;
connection.query(createUserProfileTable,(error,result)=>{
	if(error) throw error;
	console.log(`table user_profile was created`)
})


const addForeignKeyReceiverUid = `ALTER TABLE \`chat\` ADD FOREIGN KEY (\`receiver_uid\`) REFERENCES \`user\` (\`uid\`);`;
connection.query(addForeignKeyReceiverUid,(error,result)=>{
	if(error) throw error;
	console.log(`foreign key added in chat table: (receiver_uid) references user(uid)`);
})


const addForeignKeySenderUid = `  ALTER TABLE \`chat\` ADD FOREIGN KEY (\`sender_uid\`) REFERENCES \`user\` (\`uid\`);`;
connection.query(addForeignKeySenderUid, (error, result) => {
  if (error) throw error;
  console.log(`foreign key added in chat table: (sender_uid) references user(uid)`);
});



const addForeignKeyCommenterUid = `ALTER TABLE \`comment\` ADD FOREIGN KEY (\`commenter_uid\`) REFERENCES \`user\` (\`uid\`);`;
connection.query(addForeignKeyCommenterUid,(error,result)=>{
	if(error) throw error;
	console.log(`foreign key added in comment table: (commenter_uid) references user(uid)`)
})


const addForeignKeyProjectLeader = `ALTER TABLE \`project_status\` ADD FOREIGN KEY (\`project_leader\`) REFERENCES \`user\` (\`uid\`);`;
connection.query(addForeignKeyProjectLeader,(error,result)=>{
	if(error) throw error;
	console.log(`foreign key added in project_status table: (project_leader) references user(uid)`)
})


const addForeignKeyTaskPid = `ALTER TABLE \`task\` ADD FOREIGN KEY (\`pid\`) REFERENCES \`project_status\` (\`pid\`);`;
connection.query(addForeignKeyTaskPid,(error,result)=>{
	if(error) throw error;
	console.log(`foreign key added in task table: (pid) references project_status(pid)`)
})


const addForeignKeyProjectMemberPid = `ALTER TABLE \`project_member\` ADD FOREIGN KEY (\`pid\`) REFERENCES \`project_status\` (\`pid\`);`;
connection.query(addForeignKeyProjectMemberPid,(error,result)=>{
	if(error) throw error;
	console.log(`foreign key added in project_member table: (pid) references project_status(pid)`)
})


const addForeignKeyProjectMemberUid = `ALTER TABLE \`project_member\` ADD FOREIGN KEY (\`uid\`) REFERENCES \`user\` (\`uid\`);`;
connection.query(addForeignKeyProjectMemberUid,(error,result)=>{
	if(error) throw error;
	console.log(`foreign key added in project_member table: (uid) references user(uid)`)
})


const addForeignKeyTaskRoleid = `ALTER TABLE \`task\` ADD FOREIGN KEY (\`roleid\`) REFERENCES \`role\` (\`roleid\`);`;
connection.query(addForeignKeyTaskRoleid,(error,result)=>{
	if(error) throw error;
	console.log(`foreign key added in task table: (roleid) references role(roleid)`)
})


const addForeignKeyUserProfileUid = `ALTER TABLE \`user_profile\` ADD FOREIGN KEY (\`uid\`) REFERENCES \`user\` (\`uid\`);`;
connection.query(addForeignKeyUserProfileUid,(error,result)=>{
	if(error) throw error;
	console.log(`foreign key added in user_profile table: (uid) references user(uid)`)
})


const addForeignKeyRoleRoleid = `ALTER TABLE \`role\` ADD FOREIGN KEY (\`roleid\`) REFERENCES \`user_profile\` (\`roleid\`);`;
connection.query(addForeignKeyRoleRoleid,(error,result)=>{
	if(error) throw error;
	console.log(`foreign key added in role table: (roleid) references user_profile(roleid)`)
})


module.exports = {
    connection
}