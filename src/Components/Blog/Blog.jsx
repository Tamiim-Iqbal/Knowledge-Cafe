import PropTypes from 'prop-types';
import { BsBookmark} from "react-icons/bs";

const Blog = ({blog, handleAddBookmark, handleMarkRead}) => {
    // console.log(blog);
    const {title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;

    return (
        <div className='w-5/6 mb-5 pb-5 border-b-2'>
            <h2 className='text-2xl font-medium mb-2'>{title}</h2>
            <img className='rounded-md mb-5' src={cover} alt="" />  
            <div className='flex justify-between items-center mb-2'>
                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-3'>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <p className='text-gray-600'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-gray-600 mr-1'>0{reading_time} min read</span>
                    <button 
                        onClick={() => handleAddBookmark(blog)}
                    ><BsBookmark/></button>
                </div>
            </div>
            {/* <div>
                {hashtags.map((hashtag, index) => (
                    <p key={index} className="mb-1 text-gray-600">{hashtag}</p> 
                    ))}
            </div> */}
             <p className="mb-1 text-gray-600">#{hashtags.join("   #")}</p>
            <button onClick={() => handleMarkRead(reading_time)} className='underline text-blue-500 hover:text-red-500' href="">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func.isRequired
}

export default Blog;