import React from 'react';
import { Admin, Resource, ListGuesser, fetchUtils, List, Datagrid, TextField, EmailField } from 'react-admin'

import simpleRestProvider from 'ra-data-simple-rest';

const httpClient = (url, options = {}) => {

    options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
    return fetchUtils.fetchJson(url, options);
};

const AdminPanel = () => (
    <Admin dataProvider={simpleRestProvider('http://jsonplaceholder.typicode.com', httpClient)}>
        <Resource name="users" list={UserList} />
    </Admin>
);

const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="uid" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
        </Datagrid>
    </List>
);
export default AdminPanel;

