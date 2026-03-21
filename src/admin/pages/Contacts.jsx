import { useEffect, useState } from "react";
import api from "../../api/axios";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await api.get("/contacts");
      setContacts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Contact Queries</h2>
          <p className="text-gray-500">
            Manage and respond to student inquiries
          </p>
        </div>

        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
          {contacts.length} Total
        </span>
      </div>

      <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wide">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Message</th>
                <th className="px-6 py-4 text-center">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {contacts.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{item.name}</td>

                  <td className="px-6 py-4">{item.email}</td>

                  <td className="px-6 py-4">{item.phone}</td>

                  <td className="px-6 py-4">{item.message}</td>

                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-600">
                      Pending
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
