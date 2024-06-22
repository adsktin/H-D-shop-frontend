import React, { useState } from 'react';

export default function Comment() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Michael Gough',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      date: '2022-02-08',
      content: 'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.',
      replies: []
    },
    {
      id: 2,
      author: 'Jese Leos',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      date: '2022-02-12',
      content: 'Much appreciated! Glad you liked it ☺️',
      replies: []
    },
    {
      id: 3,
      author: 'Bonnie Green',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
      date: '2022-03-12',
      content: 'The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.',
      replies: []
    },
    {
      id: 4,
      author: 'Helene Engels',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
      date: '2022-06-23',
      content: 'Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.',
      replies: []
    }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObject = {
        id: comments.length + 1,
        author: 'Anonymous',
        avatar: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
        date: new Date().toISOString().split('T')[0],
        content: newComment,
        replies: []
      };
      setComments([newCommentObject, ...comments]);
      setNewComment('');
    }
  };

  const handleReplySubmit = (id, replyContent) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === id) {
        return {
          ...comment,
          replies: [...comment.replies, {
            id: comment.replies.length + 1,
            author: 'Anonymous',
            content: replyContent,
            date: new Date().toISOString().split('T')[0]
          }]
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Bình luận ({comments.length})</h2>
          </div>
          <form className="mb-6" onSubmit={handleCommentSubmit}>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-500  dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">Your comment</label>
              <textarea
                id="comment"
                rows="6"
                className="px-0 w-full text-sm text-gray-900 border-1 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Viết bình luận..."
                value={newComment}
                onChange={handleCommentChange}
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex bg-black items-center py-2.5 px-8 text-xs font-medium text-center text-white rounded-md focus:ring-4 hover:bg-gray-500"
            >
              Gửi bình luận
            </button>
          </form>
          {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} onReplySubmit={handleReplySubmit} />
          ))}
        </div>
      </section>
    </div>
  );
}

function CommentItem({ comment, onReplySubmit }) {
  const [reply, setReply] = useState('');
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleReplyFormSubmit = (e) => {
    e.preventDefault();
    if (reply.trim()) {
      onReplySubmit(comment.id, reply);
      setReply('');
      setShowReplyBox(false);
    }
  };

  return (
    <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900 mb-6">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img className="mr-2 w-6 h-6 rounded-full" src={comment.avatar} alt={comment.author} />
            {comment.author}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={comment.date}>{new Date(comment.date).toLocaleDateString()}</time>
          </p>
        </div>
        <button
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>
      </footer>
      <p className="text-gray-700 dark:text-gray-400">{comment.content}</p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
          onClick={() => setShowReplyBox(!showReplyBox)}
        >
          <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
          </svg>
          Trả lời
        </button>
      </div>
      {showReplyBox && (
        <form className="mt-4" onSubmit={handleReplyFormSubmit}>
          <textarea
            className="w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg dark:text-white dark:bg-gray-800 dark:border-gray-700"
            rows="4"
            value={reply}
            onChange={handleReplyChange}
            required
          />
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-black rounded-lg focus:ring-4 hover:bg-gray-500"
          >
            Gửi trả lời
          </button>
        </form>
      )}
      {comment.replies.map((reply) => (
        <article key={reply.id} className="p-6 mt-4 ml-6 text-base bg-white rounded-lg dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <img className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt={reply.author} />
                {reply.author}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time dateTime={reply.date}>{new Date(reply.date).toLocaleDateString()}</time>
              </p>
            </div>
          </footer>
          <p className="text-gray-700 dark:text-gray-400">{reply.content}</p>
        </article>
      ))}
    </article>
  );
}
