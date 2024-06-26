import React, { useEffect, useState } from "react";
import AdminContacts from "../components/admin/AdminContacts";

const BASE_URL = "http://localhost:3030/contact";

export default function Admin() {
  return (
  <AdminContacts/>);
}
