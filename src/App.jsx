import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const markAsRead = time => {
    setReadingTime(readingTime + time);
  }
  
  return (
    <>
      <Header></Header>
      <div className='md: flex justify-between'>
        <Blogs handleAddToBookmark={handleAddToBookmark} markAsRead={markAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

      </div>
    </>
  )
}

export default App
