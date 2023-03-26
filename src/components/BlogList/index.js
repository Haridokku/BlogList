import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      <ul className="blog-container">
        {blogsList.map(each => (
          <BlogItem key={each.id} blogDetails={each} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
