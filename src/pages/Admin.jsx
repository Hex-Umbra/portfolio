import AdminContacts from "../components/admin/AdminContacts";
import AdminSkills from "../components/admin/AdminSkills";

export default function Admin() {
  return (
    <>
      <div className="secondary-section">
        <AdminContacts />
      </div>
      <div className="secondary-section">
        <AdminSkills />
      </div>
    </>
  );
}
