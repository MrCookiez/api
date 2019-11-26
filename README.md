# florinafood.gr
Local Delivery and Food Guide

### INSTALL PROJECT

1. `git clone -project-url- `
2. `yarn install`
3. `yarn start`

### BUILD WITH
* MySQL
* Express JS
* React JS
* Node JS

### INSTALL && RUN PROJECT

1. Type `yarn && yarn setup` enter - to install all the node modules
2. Type `yarn dev` enter - to start the project

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