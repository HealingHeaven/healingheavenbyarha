const Testimonial = ({ name, review, avatar }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <h4 className="text-xl font-bold text-blue-900">{name}</h4>
        </div>
        <p className="text-blue-700 italic">"{review}"</p>
      </div>
    );
  };
  
  export default Testimonial;