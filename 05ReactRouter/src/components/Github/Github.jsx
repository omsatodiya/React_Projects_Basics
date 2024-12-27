import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">GitHub Profile</h1>
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold">{data.name}</h2>
        <p className="text-lg text-gray-400">@{data.login}</p>
        <p className="mt-4 text-xl">Followers: {data.followers}</p>
        <p className="text-xl">Following: {data.following}</p>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/omsatodiya");
  return response.json();
};
