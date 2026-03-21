

const Courses = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Courses</h2>

      <div className="space-y-4">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold">MBBS</h3>
          <p className="text-gray-500">Medical Program</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold">B.Tech</h3>
          <p className="text-gray-500">Engineering Program</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold">MBA</h3>
          <p className="text-gray-500">Management Program</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold">MCA</h3>
          <p className="text-gray-500">Computer Applications Program</p>
        </div>
      </div>
    </>
  );
};

export default Courses;
