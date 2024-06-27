import AdminContacts from "../components/admin/AdminContacts";
import AdminSkills from "../components/admin/AdminSkills";

export default function Admin() {
  return (
    <section className="h-[550px] bg-[#000000b9] mx-16 rounded-3xl my-10">
      <AdminContacts />
      <AdminSkills/>
    </section>
  );
}
