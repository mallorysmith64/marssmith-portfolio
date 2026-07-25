const BLOG_LINKS = [
  {
    title:"Mars Smith Blog",
    description: "my personal blog",
    href:"https://marssmith42blog.vercel.app/",
  },
  {
    title: "Mars Smith Book Reviews Blog",
    description: "reviews and thoughts on the books I've been reading",
    href: "https://marssmithbookreviews.wordpress.com/",
  },
  {
    title: "Dynamic Form Generator Blog",
    description: "allows users to create dynamic forms and send form links to other people",
    href: "https://mallorysmithformgenerator.wordpress.com/",
  },
];

function Blogs() {
  return (
    <div className="page">
      <h1 className="page-title">Blogs</h1>
      <p className="page-subtitle">Places where I write</p>

      <div className="blog-grid">
        {BLOG_LINKS.map((blog) => (
          <a
            key={blog.href}
            href={blog.href}
            className="blog-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="blog-card-title">{blog.title}</h2>
            <p className="blog-card-desc">{blog.description}</p>
            <span className="blog-card-cta">Visit blog</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Blogs;