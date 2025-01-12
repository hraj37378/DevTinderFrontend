const UserCard = ({ user }) => {
   const {firstName, lastName, age, imageUrl, about, gender} = user;

  return (
    <div>
      <div className="card card-side bg-base-300 shadow-xl">
        <figure>
          <img
            src= {imageUrl}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ firstName + " " + lastName}</h2>
          {age && gender && <p>{age + ", " + gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-secondary">Like</button>
            <button className="btn btn-primary">Dislike</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
