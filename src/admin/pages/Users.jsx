

const Users = () => {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Users</h2>
        <p className="text-gray-500 text-sm">Manage registered students</p>
      </div>

      <div className="bg-white rounded-2xl shadow border border-gray-100">
       
        <div className="w-full overflow-x-auto">
          
          <table className="min-w-[650px] w-full text-left whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4 text-center">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="border-t">
                <td className="px-6 py-4 font-medium">Riya Sharma</td>
                <td className="px-6 py-4">riya@gmail.com</td>
                <td className="px-6 py-4">Student</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-6 py-4 font-medium">Amit Verma</td>
                <td className="px-6 py-4">amit@gmail.com</td>
                <td className="px-6 py-4">Student</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
