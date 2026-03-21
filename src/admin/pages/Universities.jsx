

const Universities = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Universities</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg">Patna University</h3>
          <p className="text-gray-500 mt-2">Patna</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg">Oxford University</h3>
          <p className="text-gray-500 mt-2">UK</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg"> RGPV University </h3>
          <p className="text-gray-500 mt-2">Bhopal</p>
        </div>
      </div>
    </>
  );
};

export default Universities;
