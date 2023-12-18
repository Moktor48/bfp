/*
Role set-up
user/admin is likely the only needed for this, though username can also work. 

role:
Role grants access through prisma 

username:
Prisma displays access through queries

ADMIN:
role or username, role will teach you more. Use role to give access to admin page

table:
user: username, password, role (allows admin or no admin), password (send alerts?!), 
tasks: taskid (random number generator), task, due(triggers alerts?), complete, assign (FK to username)
role: prisma checks role and === verifies if(role === 'admin') {load the admin page in nav and access granted}
...role pulls from DB to verify in session

/dashboard/user (tasks connected to the user (task:assign))
/dashboard/admin (tasks connected to all, plus components for administration)

BJJ: passing from half-guard, moving from half-guard... learn half-guard/deep half. I live here anyway. 



*/