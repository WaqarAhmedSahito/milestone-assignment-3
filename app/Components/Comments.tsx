"use client";
import React from "react";
import { useState } from "react";
import { ChangeEvent } from "react";
interface Comment {
    username: string;
    comment: string;
  }

  const Comments: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [username, setUsername] = useState<string>("");
    const [comment, setComment] = useState<string>("");
  
    const handleAddComment = () => {
      if (username && comment) {
        setComments([...comments, { username, comment }]);
        setUsername("");
        setComment("");
      }
    };

const handleDeleteComment = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="w-full max-w-3xl mt-8">
    <h2 className="text-4xl font-bold mb-4 font-body">Comments</h2>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Your Name"
        value={username}
        onChange={handleUsernameChange}
        className="border border-gray-300 p-2 rounded-lg w-full mb-2 font-body text-xl"
      />
      <textarea
        placeholder="Your Comment"
        value={comment}
        onChange={handleCommentChange}
        className="border border-gray-300 p-2 rounded-lg w-full mb-2 font-body text-xl"
      />
      <button
        onClick={handleAddComment}
        className="bg-yellow-500 font-body text-xl text-white px-4 py-2 rounded-lg"
      >
        Add Comment
      </button>
    </div>
    <div>
      {comments.map((c, index) => (
        <div key={index} className="border border-gray-300 p-4 rounded-lg mb-4 ">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold font-body text-3xl">{c.username}</span>
            <button
              onClick={() => handleDeleteComment(index)}
              className="text-red-500 font-body text-xl hover:underline"
            >
              Delete
            </button>
          </div>
          <p className="font-body text-2xl">{c.comment}</p>
        </div>
      ))}
    </div>
  </div>

  );
}
export default Comments;