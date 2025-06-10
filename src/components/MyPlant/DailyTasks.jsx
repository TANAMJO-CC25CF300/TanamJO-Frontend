import { useEffect, useState } from "react";
import { PlusCircle, CheckCircle } from "lucide-react";
import Point from "../../assets/MyPlant/Point.svg";

export default function DailyTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleTaskClick = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  useEffect(() => {
    fetch("/api/daily-tasks") // Ganti dengan endpoint API kamu
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data");
        return res.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        // Jangan set error, langsung pakai data dummy
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
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="rounded-2xl border border-gray-300 p-6 w-[579px] bg-white">
      <div className="mb-2">
        <span className="text-xl font-semibold">Daily Tasks</span>
        <div className="text-sm text-gray-600 text-center mt-1 mb-2">
          Your Plant Age is 1 DAP
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        {tasks.map((task, idx) => (
          <div
            key={task.id}
            className={`flex items-center gap-4 rounded-xl shadow-sm bg-white overflow-hidden border border-gray-200 ${
              idx !== tasks.length - 1 ? "mb-2" : ""
            }`}
          >
            <div
              onClick={() => handleTaskClick(task.id)}
              className={`flex items-center justify-center w-14 h-14 rounded-full shadow-md transition-all duration-200 cursor-pointer border-2 ml-4 ${
                task.done
                  ? "bg-green-600 border-green-700 hover:scale-105 hover:shadow-lg"
                  : "bg-red-600 border-red-700 hover:scale-105 hover:shadow-lg"
              }`}
              style={{ minWidth: 56, minHeight: 56 }}
            >
              {task.done ? (
                <CheckCircle color="#fff" size={32} />
              ) : (
                <PlusCircle color="#fff" size={32} />
              )}
            </div>
            <div className="flex-1 px-5 py-3 flex flex-col justify-center gap-2">
              <span className="font-medium text-base text-black">
                {task.title}
              </span>
              <div className="flex items-center gap-2 mt-1">
                <img src={Point} alt="point" className="w-4 h-4" />
                <span className="text-xs text-gray-500">
                  {task.point}+growth point
                </span>
              </div>
            </div>
            <div className="pr-4 text-xs text-gray-400 whitespace-nowrap">
              {task.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
