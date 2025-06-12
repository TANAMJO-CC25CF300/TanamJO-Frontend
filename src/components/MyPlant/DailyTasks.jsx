import { useEffect, useState } from "react";
import { PlusCircle, CheckCircle } from "lucide-react";
import Point from "../../assets/MyPlant/Point.svg";
import axios from "axios";

export default function DailyTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleTaskClick = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  // Fungsi fetch ulang data tasks
  const fetchTasks = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4545/checkin?userId=1", {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      })
      .then((res) => {
        const apiData = res.data && res.data.data ? res.data.data : {};
        const tasksRaw = Array.isArray(apiData.tasks) ? apiData.tasks : [];
        const tasksArr = tasksRaw.map((task, idx) => ({
          id: task.id || idx,
          title: task.title || "Untitled Task",
          point: task.point || 12,
          time: task.time || "9h",
          done: false,
        }));
        setTasks(
          tasksArr.length === 0
            ? [
                {
                  id: 1,
                  title:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  point: 12,
                  time: "9h",
                  done: false,
                },
                {
                  id: 2,
                  title:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  point: 12,
                  time: "9h",
                  done: false,
                },
                {
                  id: 3,
                  title:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  point: 12,
                  time: "9h",
                  done: true,
                },
              ]
            : tasksArr
        );
        setLoading(false);
      })
      .catch(() => {
        setTasks([
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            point: 12,
            time: "9h",
            done: false,
          },
          {
            id: 2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            point: 12,
            time: "9h",
            done: false,
          },
          {
            id: 3,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            point: 12,
            time: "9h",
            done: true,
          },
        ]);
        setLoading(false);
      });
  };

  const handleSubmitCheckin = async () => {
    setSubmitting(true);
    const token = localStorage.getItem("token");
    const userId = 1; // Ganti dengan userId dinamis jika ada
    const completedTaskIds = tasks.filter((t) => t.done).map((t) => t.id);

    try {
      await axios.post(
        "http://localhost:4545/checkin",
        {
          userId,
          taskIds: completedTaskIds,
          descriptionContent: description,
        },
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        }
      );
      alert("Checkin berhasil!");
      setDescription("");
    } catch (err) {
      alert("Gagal submit checkin.");
    }
    setSubmitting(false);
  };

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line
  }, []);

  if (loading) return <div>Loading...</div>;

  // Log tasks before render
  console.log("Render tasks:", tasks);

  return (
    <div className="rounded-2xl border border-gray-300 p-4 md:p-6 w-full max-w-full md:max-w-[579px] mx-auto bg-white">
      <div className="mb-2">
        <span className="text-lg md:text-xl font-semibold">Daily Tasks</span>
        <div className="text-xs md:text-sm text-gray-600 text-center mt-1 mb-2">
          Your Plant Age is 1 DAP
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-4 mt-2">
        {tasks.map((task, idx) => (
          <div
            key={task.id}
            className={`flex items-center gap-2 md:gap-4 rounded-xl shadow-sm bg-white overflow-hidden border border-gray-200 ${
              idx !== tasks.length - 1 ? "mb-2" : ""
            }`}
          >
            <div
              onClick={() => handleTaskClick(task.id)}
              className={`flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full shadow-md transition-all duration-200 cursor-pointer border-2 ml-2 md:ml-4 ${
                task.done
                  ? "bg-green-600 border-green-700 hover:scale-105 hover:shadow-lg"
                  : "bg-red-600 border-red-700 hover:scale-105 hover:shadow-lg"
              }`}
              style={{ minWidth: 40, minHeight: 40 }}
            >
              {task.done ? (
                <CheckCircle color="#fff" size={24} className="md:w-8 md:h-8" />
              ) : (
                <PlusCircle color="#fff" size={24} className="md:w-8 md:h-8" />
              )}
            </div>
            <div className="flex-1 px-2 md:px-5 py-2 md:py-3 flex flex-col justify-center gap-1 md:gap-2">
              <span className="font-medium text-sm md:text-base text-black line-clamp-2">
                {task.title}
              </span>
              <div className="flex items-center gap-1 md:gap-2 mt-1">
                <img
                  src={Point}
                  alt="point"
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                <span className="text-[10px] md:text-xs text-gray-500">
                  {task.point}+growth point
                </span>
              </div>
            </div>
            <div className="pr-2 md:pr-4 text-[10px] md:text-xs text-gray-400 whitespace-nowrap">
              {task.time}
            </div>
          </div>
        ))}
      </div>
      {/* Description Input */}
      <div className="mt-4">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a note about your plant's progress..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          rows="3"
        />
      </div>
      {/* Submit Button */}
      <button
        onClick={handleSubmitCheckin}
        className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Submit Checkin"}
      </button>
    </div>
  );
}
