import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

export default function Answers() {
  return (
    <div className="bg-purple-950 min-h-screen flex flex-col items-start pt-9 pl-9 pr-9 pb-9">
      <div className="flex space-x-9 items-start">
        <FaUserCircle className="text-9xl text-purple-400 bg-white avatar aspect-square rounded-full" />

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-purple-950 font-bold pl-4 pr-4 pb-1">Username</h1>
          <p className="text-purple-500 pl-4 pr-4 pb-1">AlaaRammu</p>
          <p className="text-purple-500 pl-4 pr-4">
            https://Food4Thought/AlaaRammu/
          </p>
        </div>

        <div className="bg-purple-950 rounded-full p-6 mt-9 flex space-x-6">
          <Link href="./likes" legacyBehavior>
            <a className="text-white font-bold rounded-full pt-3 pb-3 bg-purple-950 hover:bg-purple-500 focus:bg-purple-500 pr-3 pl-3">
              Likes
            </a>
          </Link>
          <Link href="./questions" legacyBehavior>
            <a className="text-white font-bold rounded-full pt-3 pb-3 bg-purple-950 hover:bg-purple-500 focus:bg-purple-500 pr-3 pl-3">
              My Questions
            </a>
          </Link>
          <Link href="./answers" legacyBehavior>
            <a className="text-white font-bold rounded-full pt-3 pb-3 bg-purple-500 hover:bg-purple-500 focus:bg-purple-500 pr-3 pl-3">
              My Answers
            </a>
          </Link>
          <Link href="./company-activity" legacyBehavior>
            <a className="text-white font-bold rounded-full pt-3 pb-3 bg-purple-950 hover:bg-purple-500 focus:bg-purple-500 pr-3 pl-3">
              Company Activity
            </a>
          </Link>
          <Link href="./manage-users" legacyBehavior>
            <a className="text-white font-bold rounded-full pt-3 pb-3 bg-purple-950 hover:bg-purple-500 focus:bg-purple-500 pr-3 pl-3">
              Manage Users
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
