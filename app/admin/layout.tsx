import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Max-Commerce Yönetici",
  description: "Max-Commerce Yönetici Paneli ",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
