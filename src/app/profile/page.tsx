import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="bg-purple-950 min-h-screen flex flex-col items-start pt-9 pl-9 pr-9 pb-9">
    <div className="flex space-x-9 items-start">
      <div className="relative w-36 h-36 flex-shrink-0">
        <FaUserCircle className="absolute inset-0 text-purple-400 bg-white rounded-full w-full h-full" />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-purple-950 font-bold pl-4">Username</h1>
          <Link href="/" legacyBehavior>
            <a className="text-white font-bold rounded-full pt-2 pb-2 bg-purple-400 hover:bg-purple-500 focus:bg-purple-500 pr-3 pl-3 flex-shrink-0">
              Edit Profile
            </a>
          </Link>
        </div>
        <p className="text-purple-500 pl-4 pr-4 pb-1">AlaaRammu</p>
        <p className="text-purple-500 pl-4 pr-4">
          https://Food4Thought/AlaaRammu/
        </p>
      </div>

        <div className="bg-purple-950 rounded-full p-6 mt-9 flex space-x-6">
          <Link href="./profile/likes" legacyBehavior>
            <a className="text-white font-bold rounded-full pt-3 pb-3 bg-purple-950 hover:bg-purple-500 focus:bg-purple-500 pr-3 pl-3 flex-shrink-0">
              Likes
            </a>
          </Link>
          <Link href="./profile/questions" legacyBehavior>
            <a className="text-white font-bold rounded-full pt-3 pb-3 bg-purple-950 hover:bg-purple-500 focus:bg-purple-500 pr-3 pl-3 flex-shrink-0">
              My Questions
            </a>
          </Link>
          <Link href="./profile/answers" legacyBehavior>
            <a className="text-white font-bold rounded-full pt-3 pb-3 bg-purple-950 hover:bg-purple-500 focus:bg-purple-500 pr-3 pl-3 flex-shrink-0">
              My Answers
            </a>
          </Link>
          <Link href="./profile/company-activity" legacyBehavior>
            <a className="text-white font-bold rounded-full pt-3 pb-3 bg-purple-950 hover:bg-purple-500 focus:bg-purple-500 pr-3 pl-3 flex-shrink-0">
              Company Activity
            </a>
          </Link>
          <Link href="./profile/manage-users" legacyBehavior>
            <a className="text-white font-bold rounded-full pt-3 pb-3 bg-purple-950 hover:bg-purple-500 focus:bg-purple-500 pr-3 pl-3 flex-shrink-0">
              Manage Users
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
