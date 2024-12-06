import {Navlink, Outlet } from "react-router-dom"

export const AdminLayout=()=>{
    return<>
    <h1>Admin Layout</h1>
    <ul>
        <li> <Navlink to = {"/admin/users"}>Users</Navlink></li>
        <li> <Navlink to = {"/admin/contacts"}>Contacts</Navlink></li>
    </ul>
    </>
}