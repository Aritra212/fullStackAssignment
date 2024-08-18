function Card({ title, description }) {
  return (
    <div className="w-[260px] sm:w-[300px] bg-gray-200 rounded-lg p-4 box-border">
      <p className="text-xl font-bold text-black/60 py-1 border-solid border-b-2 border-black/60">
        {title}
      </p>
      <p className="text-sm py-2">{description}</p>
    </div>
  );
}

export default Card;
