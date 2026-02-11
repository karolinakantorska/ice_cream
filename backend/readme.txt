Then start it:

sudo service postgresql start


Check:

sudo service postgresql status

Create your database:

sudo -u postgres psql

CREATE DATABASE icecream;
CREATE USER iceuser WITH PASSWORD 'strongpassword';
GRANT ALL PRIVILEGES ON DATABASE icecream TO iceuser;
\q

Step 1 — Enter PostgreSQL as superuser
sudo -u postgres psql

Step 2 — Give CREATEDB permission

Inside psql:

ALTER USER iceuser CREATEDB;
\q

Step 3 — Run migration again
npx prisma migrate devnpx prisma migrate dev


