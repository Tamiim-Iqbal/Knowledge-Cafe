import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div className='mt-8 border border-purple-400 bg-purple-50 p-4 text-lg rounded-lg'>
                <h4 className='font-semibold text-purple-600'>Spent time on read : {readingTime} min</h4>
            </div>
            <div className='mt-5 bg-gray-200 p-4 rounded-lg'>
            <h3 className='text-xl font-semibold'>Bookmarked Blogs : {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.array
}
export default Bookmarks;