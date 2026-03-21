import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

const StudyPage = () => {
  const { slug } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (slug && slug !== "undefined") {
  //     setLoading(true);
  //     fetchPage();
  //   } else {
  //     setLoading(false);
  //     setData(null);
  //   }
  // }, [slug]);

  // const fetchPage = async () => {
  //   try {
  //     const res = await api.get(`page/${slug}`);
  //     const pageData = res?.data?.data || res?.data || null;
  //     setData(pageData);
  //   } catch (err) {
  //     console.log("API ERROR:", err);
  //     setData(null);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await api.get(`page/${slug}`);
        const pageData = res?.data?.data || res?.data || null;
        setData(pageData);
      } catch (err) {
        console.log("API ERROR:", err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug && slug !== "undefined") {
      setLoading(true);
      fetchPage();
    } else {
      setLoading(false);
      setData(null);
    }
  }, [slug]);
  if (loading) return <p className="p-10">Loading...</p>;

  if (!slug || slug === "undefined")
    return <p className="p-10">Invalid Page ❌</p>;

  if (!data) return <p className="p-10">Page not found ❌</p>;

  return (
    <div className="bg-white">
      <section className="bg-blue-600 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">
          {data?.content?.hero?.heading || data?.title || "No Heading"}
        </h1>
        <p className="mt-3">
          {data?.content?.hero?.subheading || "No Subheading"}
        </p>
      </section>

      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{data?.title}</h2>
        <p className="text-gray-600">{data?.content?.intro?.description}</p>
      </section>

      <section className="bg-gray-100 p-10">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded shadow">
            <h3>Eligibility</h3>
            <p>{data?.content?.extra?.eligibility}</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3>Career Scope</h3>
            <p>{data?.content?.extra?.careerScope}</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3>Duration</h3>
            <p>{data?.content?.extra?.duration}</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3>Mode</h3>
            <p>{data?.content?.extra?.mode}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyPage;
