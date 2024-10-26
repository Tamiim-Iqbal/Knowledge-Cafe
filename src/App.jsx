import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark  = blog => {
    // console.log("Bookmark adding soon!")
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkRead = time => {
    // console.log("time", time)
    const newTime = readingTime + time;
    setReadingTime(newTime);
  }

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs 
            handleAddBookmark={handleAddBookmark}
            handleMarkRead={handleMarkRead}
        ></Blogs>
        <Bookmarks 
            bookmarks={bookmarks}
            readingTime = {readingTime}
        ></Bookmarks>
      </div>
      
    </>
  )
}

export default App
