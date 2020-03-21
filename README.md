# florinafood.gr
Local Delivery and Food Guide

<img src="Screenshot%202020-03-21%20at%2001.40.59.png" width=40 height=40 />

### Build with (L0v3)
* MySQL
* Express JS
* React JS
* Node JS

### Install & run project

1. Type `yarn && yarn setup` enter - to install all the node modules
2. Type `yarn dev` enter - to start the project

### Project Planning/Design/Managment

1. Database design | MySQLdbm
Link: https://app.sqldbm.com/MySQL/Draft/
-----------------------------------------

2. Software design | Figma
Link: https://www.figma.com/
-----------------------------------------

3. Task Manager    | nTask
Link: https://www.ntaskmanager.com/
-----------------------------------------


## Detailes
#### 1. Admin role
> Code: 0
> As an administrator the privilege are unlimited. Both private and public data can be accessed
> Create, Read, Update, Delete:
> Users, Shops, Products, Orders, Analytics & Insights, Posts

#### 2. Shop owner role
> Code: 1
> As shop owner the privileges are limited but still private and public access to particular data
> Create, Read, Update, Delete:
> Personal user info, personal shop info, shop's products, shop's orders
> Read only:
> Shop's analytics & Insights

#### 3. Simple user role
> Code: 2
> As simple user the privileges are limited but still private and public access to particular data
> Create, Read, Update, Delete:
> Personal user info
> Read only:
> Shops' info
