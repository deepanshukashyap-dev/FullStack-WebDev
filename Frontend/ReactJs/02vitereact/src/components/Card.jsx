// Day-30: React Props - Passing data to components

function Card({ title, description, author, date }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "10px",
      maxWidth: "300px",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <small>By {author} on {date}</small>
    </div>
  );
}

export default Card;
